import * as ds from "@devicescript/core"
import { i2c } from "@devicescript/i2c"
import { DriverError, throttle } from "./core"
import { startHumidity, startTemperature } from "./servers"

// low level i2c comms
const addr = 0x38
async function status() {
    return (await i2c.readBuf(addr, 1))[0]
}
async function waitBusy() {
    const busy = 0x80
    while ((await status()) & busy) await ds.sleep(10)
}
async function init() {
    const ok = 0x08
    await i2c.writeBuf(addr, hex`BA`) // reset
    await ds.sleep(20)
    await i2c.writeBuf(addr, hex`E10800`) // calibrate
    await waitBusy()
    if (!((await status()) & ok)) throw new DriverError("can't init AHT20")
}

async function read() {
    await i2c.writeBuf(addr, hex`AC3300`)
    await waitBusy()
    const data = await i2c.readBuf(addr, 6)

    const h0 = (data[1] << 12) | (data[2] << 4) | (data[3] >> 4)
    const humidity = (h0 * 100) / 0x100000
    const t0 = ((data[3] & 0xf) << 16) | (data[4] << 8) | data[5]
    const temperature = (t0 * 200.0) / 0x100000 - 50

    return { humidity, temperature }
}

export async function startAHT20() {
    await init()
    const readThr = throttle(500, read)
    startTemperature({
        min: -40,
        max: 125,
        error: 0.8,
        read: async () => (await readThr()).temperature,
    })
    startHumidity({
        error: 3.5,
        read: async () => (await readThr()).humidity,
    })
}
