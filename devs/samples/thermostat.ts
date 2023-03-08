import * as ds from "@devicescript/core"

const thermometer = new ds.Temperature()
const heater = new ds.Relay()

heater.onConnected(() => {
    console.log("heater detected")
})

heater.onDisconnected(() => {
    console.log("heater lost")
})

thermometer.temperature.subscribe(async t => {
    if (t < 21) {
        await heater.active.write(true)
    } else {
        await heater.active.write(false)
    }
})