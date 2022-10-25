let PhotoresistorVal = 0
let calibrationVal = pins.analogReadPin(AnalogPin.P0)
basic.forever(function () {
    PhotoresistorVal = pins.analogReadPin(AnalogPin.P0)
    if (PhotoresistorVal < calibrationVal - 2) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
    }
})
