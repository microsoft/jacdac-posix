import * as ds from "@devicescript/core"

const btnA = new ds.Button()
const led = new ds.LightBulb()

ds.everyMs(100, async () => {
    await btnA.down.wait()
    if (await led.brightness.read() > 0)
        await led.brightness.write(0)
    else
        await led.brightness.write(1)
})
