import { parseStackFrame } from "@devicescript/compiler"
import { ensureDir } from "fs-extra"
import { spawn } from "node:child_process"
import { writeFileSync } from "node:fs"
import { resolve } from "node:path"
import { createInterface } from "node:readline"
import { BuildOptions, readDebugInfo } from "./build"
import { BINDIR, CmdOptions, log } from "./command"
import { readCompiled } from "./run"
import { printDmesg } from "./vmworker"

export interface CRunOptions {
    net?: boolean
    serial?: string
    lazyGc?: boolean
    settings?: boolean
}

export async function crunScript(
    fn: string,
    options: CRunOptions & CmdOptions & BuildOptions
) {
    options.noVerify = true
    const prog = await readCompiled(fn, options)
    const compfn = BINDIR + "/crun.devs"
    await ensureDir(BINDIR)
    writeFileSync(compfn, prog.binary)

    const args = [compfn]

    if (options.serial) args.unshift(options.serial)
    else if (options.net) args.unshift("8082", "-w")
    else args.unshift("-L")

    if (!options.lazyGc) args.unshift("-X")
    if (!options.settings) args.unshift("-n")

    const executable = resolve(__dirname, "../../runtime/built/jdcli")
    log(`run: ${executable} ${args.join(" ")}`)

    const child = spawn(executable, args, {
        stdio: ["inherit", "pipe", "inherit"],
    })

    const rl = createInterface({ input: child.stdout })
    const dbg = readDebugInfo()
    rl.on("line", line => {
        printDmesg(dbg, "C", line)
    })

    child.on("exit", (code, err) => {
        if (!code && err) code = 2
        process.exit(code)
    })
}
