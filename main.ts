let movment = 0
basic.forever(function () {
    movment = pins.digitalReadPin(DigitalPin.P1)
    if (movment == 1) {
        pins.servoWritePin(AnalogPin.P0, 180)
    } else if (movment == 0) {
        pins.servoWritePin(AnalogPin.P0, 0)
    }
})
