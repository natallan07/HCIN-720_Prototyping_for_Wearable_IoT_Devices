let Display = grove.createDisplay(DigitalPin.P1, DigitalPin.P15)
let strip = neopixel.create(DigitalPin.P2, 30, NeoPixelMode.RGB)
basic.forever(function () {
    Display.show(grove.measureInCentimeters(DigitalPin.P0))
    strip.showBarGraph(input.acceleration(Dimension.X), 255)
})
