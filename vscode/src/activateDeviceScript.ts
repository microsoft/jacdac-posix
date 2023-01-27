/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import {
    CHANGE,
    CONNECTION_STATE,
    DEVICE_CHANGE,
    Flags,
    FRAME_PROCESS,
    JDFrameBuffer,
    JDRegister,
    REGISTER_NODE_NAME,
    serializeToTrace,
} from "jacdac-ts"
import { report } from "process"
import * as vscode from "vscode"
import {
    WorkspaceFolder,
    DebugConfiguration,
    ProviderResult,
    CancellationToken,
} from "vscode"
import type { SideConnectRequestMessage } from "../../cli/src/sideprotocol"
import { activateAnalytics, reporter } from "./analytics"
import { build, initBuild } from "./build"
import {
    spawnDevTools,
    showDevToolsTerminal,
    initDevTools,
} from "./devtoolsserver"
import { sideRequest, startJacdacBus, stopJacdacBus } from "./jacdac"
import {
    JDeviceTreeItem,
    JDomDeviceTreeDataProvider,
    JDomTreeItem,
    JDomWatchTreeDataProvider,
} from "./JDomTreeDataProvider"
import { ExtensionState } from "./state"

export function activateDeviceScript(
    context: vscode.ExtensionContext,
    factory?: vscode.DebugAdapterDescriptorFactory
) {
    const { subscriptions, workspaceState, extensionMode } = context
    activateAnalytics(context)
    reporter.sendTelemetryEvent('activate')

    // setup bus
    const bus = startJacdacBus()
    context.subscriptions.push({
        dispose: stopJacdacBus,
    })

    const extensionState = new ExtensionState(bus, workspaceState)

    // devtool web panel
    let developerToolsPanel: vscode.WebviewPanel
    const updateDeveloperToolsPanelUrl = () => {
        if (!developerToolsPanel) return

        const { kind: colorThemeKind } = vscode.window.activeColorTheme
        const darkMode =
            colorThemeKind === vscode.ColorThemeKind.Dark ||
            colorThemeKind === vscode.ColorThemeKind.HighContrast
                ? "dark"
                : "light"
        developerToolsPanel.webview.html = `
        <html>
        <head>
        <style>
        body {
            margin: 0;
            padding: 0; 
            background-color: transparent;  
        }
        iframe {
            position: absolute;
            left: 0; right: 0;
            width: 100%; height: 100%;
            border: none;
        }
        </style>
        </head>
        <body>
        <iframe src="http://localhost:8081/?${darkMode}=1" />
        </body>
        </html>                
                        `
    }

    // build
    initBuild()
    subscriptions.push(
        vscode.commands.registerCommand(
            "extension.devicescript.runEditorContents",
            async (resource: vscode.Uri) => {
                reporter.sendTelemetryEvent("command", { command: "runEditorContents" })
                let targetResource = resource
                if (!targetResource && vscode.window.activeTextEditor) {
                    targetResource = vscode.window.activeTextEditor.document.uri
                }
                if (targetResource) {
                    const device =
                        await extensionState.resolveDeviceScriptManager()
                    if (!device) {
                        vscode.window.showWarningMessage(
                            "No DeviceScript device found."
                        )
                        return
                    }
                    await build(targetResource.fsPath, device.deviceId)
                }
            }
        ),
        vscode.commands.registerCommand(
            "extension.devicescript.debugEditorContents",
            async (resource: vscode.Uri) => {
                reporter.sendTelemetryEvent("command", { command: "debugEditorContents" })
                let targetResource = resource
                if (!targetResource && vscode.window.activeTextEditor) {
                    targetResource = vscode.window.activeTextEditor.document.uri
                }
                if (targetResource) {
                    const device =
                        await extensionState.resolveDeviceScriptManager()
                    if (!device) {
                        vscode.window.showWarningMessage(
                            "No DeviceScript device found."
                        )
                        return
                    }
                    if (await build(targetResource.fsPath, device.deviceId))
                        vscode.debug.startDebugging(undefined, {
                            type: "devicescript",
                            name: "Debug File",
                            request: "launch",
                            program: targetResource.fsPath,
                            stopOnEntry: true,
                        })
                }
            }
        ),
        vscode.commands.registerCommand(
            "extension.devicescript.toggleFormatting",
            variable => {
                reporter.sendTelemetryEvent("command", { command: "toggleFormatting" })
                const ds = vscode.debug.activeDebugSession
                if (ds) {
                    ds.customRequest("toggleFormatting")
                }
            }
        ),
        vscode.commands.registerCommand("extension.devicescript.start", () => {
            console.log("Starting...")
        }),
        vscode.commands.registerCommand(
            "extension.devicescript.showServerTerminal",
            () => {
                reporter.sendTelemetryEvent("command", { command: "showServerTerminal" })
                console.log("Showing terminal...")
                showDevToolsTerminal()
            }
        ),
        vscode.commands.registerCommand(
            "extension.devicescript.identifyDevice",
            (item: JDeviceTreeItem) => {
                reporter.sendTelemetryEvent("command", { command: "identifyDevice" })
                const { device } = item
                device.identify() // async
            }
        ),
        vscode.commands.registerCommand(
            "extension.devicescript.resetDevice",
            (item: JDeviceTreeItem) => {
                reporter.sendTelemetryEvent("command", { command: "resetDevice" })
                const { device } = item
                device.reset() // async
            }
        ),
        vscode.commands.registerCommand(
            "extension.devicescript.connect",
            async () => {
                reporter.sendTelemetryEvent("command", { command: "connect" })
                await spawnDevTools()
                await bus.connect()
                await sideRequest(<SideConnectRequestMessage>{
                    type: "connect",
                    data: {},
                })
            }
        ),
        vscode.commands.registerCommand(
            "extension.devicescript.openDevTools",
            async () => {
                reporter.sendTelemetryEvent("command", { command: "openDevTools" })
                if (developerToolsPanel) {
                    developerToolsPanel.reveal(vscode.ViewColumn.Nine)
                } else {
                    console.log("Opening Developer Tools...")
                    await spawnDevTools()
                    // http://localhost:8081/
                    developerToolsPanel = vscode.window.createWebviewPanel(
                        "extension.devicescript.openDevTools", // Identifies the type of the webview. Used internally
                        "DeviceScript Developer Tools", // Title of the panel displayed to the user
                        vscode.ViewColumn.Nine, // Editor column to show the new webview panel in.
                        { enableScripts: true } // Webview options. More on these later.
                    )
                    developerToolsPanel.onDidDispose(
                        () => {
                            developerToolsPanel = undefined
                        },
                        undefined,
                        context.subscriptions
                    )
                    updateDeveloperToolsPanelUrl()
                }
            }
        )
    )

    subscriptions.push(
        vscode.commands.registerCommand(
            "extension.devicescript.getProgramName",
            config => {
                return vscode.window.showInputBox({
                    placeHolder:
                        "Please enter the name of a typescript file in the workspace folder",
                    value: "main.ts",
                })
            }
        )
    )

    // track color theme
    vscode.window.onDidChangeActiveColorTheme(updateDeveloperToolsPanelUrl)

    // register a configuration provider for 'devicescript' debug type
    const provider = new DeviceScriptConfigurationProvider()
    subscriptions.push(
        vscode.debug.registerDebugConfigurationProvider(
            "devicescript",
            provider
        )
    )

    // register a dynamic configuration provider for 'devicescript' debug type
    subscriptions.push(
        vscode.debug.registerDebugConfigurationProvider(
            "devicescript",
            {
                provideDebugConfigurations(
                    folder: WorkspaceFolder | undefined
                ): ProviderResult<DebugConfiguration[]> {
                    return [
                        {
                            name: "Dynamic Launch",
                            request: "launch",
                            type: "devicescript",
                            program: "${file}",
                        },
                        {
                            name: "Another Dynamic Launch",
                            request: "launch",
                            type: "devicescript",
                            program: "${file}",
                        },
                        {
                            name: "devicescript Launch",
                            request: "launch",
                            type: "devicescript",
                            program: "${file}",
                        },
                    ]
                },
            },
            vscode.DebugConfigurationProviderTriggerKind.Dynamic
        )
    )

    subscriptions.push(
        vscode.debug.registerDebugAdapterDescriptorFactory(
            "devicescript",
            factory
        )
    )
    if ("dispose" in factory) {
        subscriptions.push(factory as any)
    }

    const config = vscode.workspace.getConfiguration("devicescript")
    const redirectConsoleOutput =
        !!config.get("redirectConsoleOutput") ||
        extensionMode == vscode.ExtensionMode.Production
    if (redirectConsoleOutput) {
        const output = vscode.window.createOutputChannel("DeviceScript", {
            log: true,
        })
        // note that this is local to this extension - see inject.js
        console.debug = output.debug
        console.log = output.info
        console.warn = output.warn
        console.error = output.error
        console.info = console.log
    }

    // launch devtools in background
    const devToolsConfig = vscode.workspace.getConfiguration(
        "devicescript.devtools"
    )
    initDevTools(context.subscriptions)
    if (devToolsConfig.get("autoStart")) {
        spawnDevTools()
        if (devToolsConfig.get("showOnStart")) showDevToolsTerminal()
    }

    context.subscriptions.push(
        vscode.commands.registerCommand(
            "extension.devicescript.selectNode",
            (item: JDomTreeItem) => {
                const { node } = item
                const { nodeKind } = node
                console.log(`Select ${node}`)
                switch (nodeKind) {
                    case REGISTER_NODE_NAME: {
                        ;(node as JDRegister).scheduleRefresh()
                        break
                    }
                }
            }
        )
    )
    const selectNodeCommand: vscode.Command = {
        title: "select node",
        command: "extension.devicescript.selectNode",
    }
    const jdomTreeDataProvider = new JDomDeviceTreeDataProvider(
        bus,
        selectNodeCommand
    )
    vscode.window.registerTreeDataProvider(
        "extension.devicescript.jacdac-jdom-explorer",
        jdomTreeDataProvider
    )

    const jdomWatchTreeDataProvider = new JDomWatchTreeDataProvider(
        bus,
        selectNodeCommand,
        extensionState
    )
    vscode.window.registerTreeDataProvider(
        "extension.devicescript.jacdac-jdom-watch",
        jdomWatchTreeDataProvider
    )

    context.subscriptions.push(
        vscode.commands.registerCommand(
            "extension.devicescript.pickDeviceScriptManager",
            () => extensionState.pickDeviceScriptManager()
        ),
        vscode.commands.registerCommand(
            "extension.devicescript.watchNode",
            (item: JDomTreeItem) => {
                console.log(`Watch ${item.node}`)
                reporter.sendTelemetryEvent("command", { command: "watchNode" })
                const id = item.node.id
                const watches = extensionState.watchKeys()
                if (!watches.includes(id)) {
                    extensionState
                        .updateWatchKeys([...watches, id])
                        .then(() => {
                            jdomWatchTreeDataProvider.refresh()
                        })
                }
            }
        ),
        vscode.commands.registerCommand(
            "extension.devicescript.unwatchNode",
            (item: JDomTreeItem) => {
                console.log(`Unwatch ${item.node}`)
                reporter.sendTelemetryEvent("command", { command: "unwatchNode" })
                const id = item.node.id
                const watches = extensionState.watchKeys()
                if (watches.includes(id)) {
                    extensionState
                        .updateWatchKeys(watches.filter(i => i !== id))
                        .then(() => {
                            jdomWatchTreeDataProvider.refresh()
                        })
                }
            }
        )
    )

    const statusBarItem = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Right,
        100
    )
    statusBarItem.command = "extension.devicescript.pickDeviceScriptManager"
    const updateStatusBar = () => {
        const mgr = extensionState.deviceScriptManager
        const devices = bus.devices({
            ignoreInfrastructure: true,
            announced: true,
        })
        statusBarItem.tooltip = mgr
            ? `Deploy and Debug on device ${mgr.shortId}`
            : `Click to pick a DeviceScript device`
        statusBarItem.text = `DeviceScript $(play) ${mgr?.shortId || "???"} $(${
            JDeviceTreeItem.ICON
        }) ${devices.length}`
    }
    extensionState.on(CHANGE, updateStatusBar)
    bus.on([DEVICE_CHANGE, CONNECTION_STATE], updateStatusBar)
    updateStatusBar()
    context.subscriptions.push(statusBarItem)
    statusBarItem.show()

    vscode.window.onDidChangeActiveColorTheme(colorTheme => {
        // TODO
    }, context.subscriptions)

    // packet trace
    let jacdacPacketsOutputChannel: vscode.OutputChannel = undefined
    const logFrame = (frame: JDFrameBuffer) => {
        const output = jacdacPacketsOutputChannel
        if (!output) return
        const msg = serializeToTrace(frame, 0, bus)
        if (msg) output.appendLine(msg)
    }
    // apply settings
    const configure = () => {
        const jacdacConfig = vscode.workspace.getConfiguration(
            "devicescript.jacdac"
        )
        Flags.diagnostics = !!jacdacConfig.get("diagnostics")
        const tracePackets = !!jacdacConfig.get("tracePackets")
        if (tracePackets) {
            if (!jacdacPacketsOutputChannel)
                jacdacPacketsOutputChannel =
                    vscode.window.createOutputChannel("Jacdac Packets")
            bus.on(FRAME_PROCESS, logFrame)
        } else if (!tracePackets && jacdacPacketsOutputChannel) {
            bus.off(FRAME_PROCESS, logFrame)
        }
        const showInfrastructure = !!jacdacConfig.get("showInfrastructure")
        jdomTreeDataProvider.showInfrastructure = showInfrastructure
    }

    // hook up to configurations
    vscode.workspace.onDidChangeConfiguration(
        configure,
        undefined,
        context.subscriptions
    )
    configure()
}

class DeviceScriptConfigurationProvider
    implements vscode.DebugConfigurationProvider
{
    /**
     * Massage a debug configuration just before a debug session is being launched,
     * e.g. add all missing attributes to the debug configuration.
     */
    resolveDebugConfiguration(
        folder: WorkspaceFolder | undefined,
        config: DebugConfiguration,
        token?: CancellationToken
    ): ProviderResult<DebugConfiguration> {
        // if launch.json is missing or empty
        if (!config.type && !config.request && !config.name) {
            const editor = vscode.window.activeTextEditor
            if (editor && editor.document.languageId === "typescript") {
                config.type = "devicescript"
                config.name = "Launch"
                config.request = "launch"
                config.program = "${file}"
                config.stopOnEntry = true
            }
        }

        if (!config.program) {
            return vscode.window
                .showInformationMessage("Cannot find a program to debug")
                .then(_ => {
                    return undefined // abort launch
                })
        }

        return config
    }
}

/*
class InlineDebugAdapterFactory implements vscode.DebugAdapterDescriptorFactory {
	createDebugAdapterDescriptor(_session: vscode.DebugSession): ProviderResult<vscode.DebugAdapterDescriptor> {
		return new vscode.DebugAdapterInlineImplementation(new LoggingDebugSession());
	}
}
*/
