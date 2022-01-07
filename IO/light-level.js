basic.forever(function () {
    if (input.lightLevel() <= 100) {
        basic.showNumber(input.lightLevel())
        basic.clearScreen()
    } else if (input.lightLevel() >= 101 && input.lightLevel() <= 175) {
        basic.showNumber(input.lightLevel())
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        basic.clearScreen()
    } else {
        basic.showNumber(input.lightLevel())
        basic.pause(100)
        basic.showLeds(`
            # # # # #
            # . # . #
            # # . # #
            # . # . #
            # # # # #
            `)
        basic.clearScreen()
    }
})
