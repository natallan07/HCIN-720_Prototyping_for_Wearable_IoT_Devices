grove.onGesture(GroveGesture.Down, function () {
    ctr_down = true
})
grove.onGesture(GroveGesture.Clockwise, function () {
    ctr_clockwise = true
})
grove.onGesture(GroveGesture.Up, function () {
    ctr_up = true
})
grove.onGesture(GroveGesture.Anticlockwise, function () {
    ctr_anticlockwise = true
})
let ctr_anticlockwise = false
let ctr_up = false
let ctr_clockwise = false
let ctr_down = false
basic.showString("Hello!")
basic.forever(function () {
    if (ctr_clockwise && ctr_anticlockwise) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (ctr_up && ctr_down) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        ctr_anticlockwise = false
        ctr_clockwise = false
        ctr_up = false
        ctr_down = false
    }
})
