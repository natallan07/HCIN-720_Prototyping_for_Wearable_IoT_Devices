let Display = grove.createDisplay(DigitalPin.P0, DigitalPin.P0)
let strip = Math.map(pins.analogReadPin(AnalogPin.P2), 0, 1023, 0, 360)
basic.forever(function () {
    if (grove.measureInCentimeters(DigitalPin.P0) <= 60) {
        music.stopAllSounds()
    } else if (grove.measureInCentimeters(DigitalPin.P0) > 60 && grove.measureInCentimeters(DigitalPin.P0) <= 120) {
        music.playMelody("B C5 A G B C5 A F ", 151)
    } else if (grove.measureInCentimeters(DigitalPin.P0) > 120 && grove.measureInCentimeters(DigitalPin.P0) <= 180) {
        music.stopAllSounds()
    } else if (grove.measureInCentimeters(DigitalPin.P0) > 180 && grove.measureInCentimeters(DigitalPin.P0) <= 240) {
        music.playMelody("C D E F G A B C5 ", 151)
    } else if (grove.measureInCentimeters(DigitalPin.P0) > 240 && grove.measureInCentimeters(DigitalPin.P0) <= 300) {
        music.stopAllSounds()
    } else if (grove.measureInCentimeters(DigitalPin.P0) > 300 && grove.measureInCentimeters(DigitalPin.P0) <= 360) {
        music.playMelody("F G F E F G F E ", 151)
    }
})
