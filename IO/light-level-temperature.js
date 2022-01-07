basic.forever(function () {
    basic.showNumber(input.temperature())
})
basic.forever(function () {
    if (input.lightLevel() == 0) {
        led.setBrightness(1)
        basic.showNumber(input.lightLevel())
        basic.clearScreen()
    } else if (input.lightLevel() == 255) {
        led.setBrightness(255)
        basic.showNumber(input.lightLevel())
        basic.pause(100)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.clearScreen()
    } else {
        led.setBrightness(125)
        basic.showNumber(input.lightLevel())
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.clearScreen()
    }
})
