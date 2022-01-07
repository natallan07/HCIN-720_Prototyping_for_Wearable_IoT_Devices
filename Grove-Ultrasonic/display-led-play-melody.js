let Display = grove.createDisplay(DigitalPin.P1, DigitalPin.P15)
basic.forever(function () {
    Display.show(grove.measureInCentimeters(DigitalPin.P0))
    if (grove.measureInCentimeters(DigitalPin.P0) < 18) {
        music.playTone(349, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.clearScreen()
        Display.show(grove.measureInCentimeters(DigitalPin.P0))
    }
})
