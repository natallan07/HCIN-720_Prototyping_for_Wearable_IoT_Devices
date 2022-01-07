input.onGesture(Gesture.TiltLeft, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
})
input.onGesture(Gesture.ScreenUp, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
})
input.onGesture(Gesture.ScreenDown, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
})
input.onGesture(Gesture.TiltRight, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
})
