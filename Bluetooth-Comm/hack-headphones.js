let vol = 120
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.setBuiltInSpeakerEnabled(true)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (input.buttonIsPressed(Button.B)) {
        music.setBuiltInSpeakerEnabled(false)
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
})
