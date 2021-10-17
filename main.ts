radio.onReceivedNumber(function (receivedNumber) {
    servos.P1.setAngle(0)
    basic.pause(500)
})
radio.onReceivedString(function (receivedString) {
    servos.P1.setAngle(90)
    basic.pause(500)
})
radio.setGroup(1)
