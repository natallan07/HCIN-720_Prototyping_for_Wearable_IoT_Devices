let strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showBarGraph(Math.map(pins.analogReadPin(AnalogPin.P2), 0, 1023, 0, 360), 360)
})
