let baseline = input.magneticForce(Dimension.Strength)
servos.P2.setAngle(90)
basic.showIcon(IconNames.No)
basic.forever(function () {
    if (Math.abs(input.magneticForce(Dimension.Strength)) - baseline > 100) {
        basic.showIcon(IconNames.Square)
        servos.P2.setAngle(150)
        control.waitMicros(1200)
    } else {
        servos.P2.setAngle(90)
        basic.showIcon(IconNames.No)
    }
})
