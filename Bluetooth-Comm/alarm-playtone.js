radio.onReceivedValue(function (name, value) {
    if (name == "alarm") {
        pins.digitalWritePin(DigitalPin.P1, 1)
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
radio.setGroup(167)
