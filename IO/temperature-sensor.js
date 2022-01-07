basic.forever(function () {
    if (input.temperature() <= 10) {
        basic.showNumber(input.temperature())
        music.setVolume(200)
        music.playTone(988, music.beat(BeatFraction.Breve))
        basic.pause(200)
    } else if (input.temperature() >= 11 && input.temperature() <= 30) {
        basic.showNumber(input.temperature())
        music.setVolume(150)
        music.playTone(659, music.beat(BeatFraction.Double))
        basic.pause(200)
    } else {
        basic.showNumber(input.temperature())
        music.setVolume(100)
        music.playTone(440, music.beat(BeatFraction.Half))
        basic.pause(200)
        basic.clearScreen()
    }
})
