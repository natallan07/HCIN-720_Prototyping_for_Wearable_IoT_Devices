let strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showRainbow(150, 290)
})
