input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.compassHeading())
})
let degree = input.compassHeading()
if (input.compassHeading() == 0) {
    basic.showString("N")
    music.playTone(262, music.beat(BeatFraction.Whole))
} else if (input.compassHeading() == 45) {
    basic.showString("NE")
} else if (input.compassHeading() == 90) {
    basic.showString("E")
} else if (input.compassHeading() == 135) {
    basic.showString("SE")
} else if (input.compassHeading() == 180) {
    basic.showString("S")
} else if (input.compassHeading() == 225) {
    basic.showString("SW")
} else if (input.compassHeading() == 270) {
    basic.showString("W")
} else {
    basic.showNumber(input.compassHeading())
}
