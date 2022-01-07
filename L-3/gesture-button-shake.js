input.onButtonPressed(Button.A, function () {
    shakes = 0
    basic.showString("" + (shakes))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (dist))
})
input.onGesture(Gesture.Shake, function () {
    shakes += 1
    dist = shakes * 0.3
    basic.showNumber(dist)
})
let dist = 0
let shakes = 0
shakes = 0
dist = 0
