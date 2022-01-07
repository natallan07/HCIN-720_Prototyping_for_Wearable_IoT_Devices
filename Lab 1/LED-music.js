basic.forever(function () {
    led.setBrightness(50)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    music.playMelody("C5 A B G A F G E ", 90)
    music.setVolume(70)
    led.setBrightness(200)
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(500)
})
