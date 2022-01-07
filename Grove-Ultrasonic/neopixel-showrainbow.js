input.onGesture(Gesture.TiltRight, function () {
    // strip.showRainbow(180, 360)
    strip.showBarGraph(220, 255)
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
basic.forever(function () {
    // strip.showRainbow(180, 360)
    strip.showBarGraph(input.acceleration(Dimension.X), 225)
})
