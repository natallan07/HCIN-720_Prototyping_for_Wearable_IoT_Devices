input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (shakes))
    shakes += 1
    basic.showString("" + (shakes))
})
let shakes = 0
shakes = 0
