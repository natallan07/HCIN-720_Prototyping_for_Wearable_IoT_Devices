let Display = grove.createDisplay(DigitalPin.P1, DigitalPin.P15)
basic.forever(function () {
    Display.bit(0, 0)
})
basic.forever(function () {
    Display.show(grove.measureInCentimeters(DigitalPin.P0))
})
