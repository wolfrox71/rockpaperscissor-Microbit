radio.onReceivedNumber(function (receivedNumber) {
	
})
function ComputerSetValue () {
    // 0 Rock
    // 1 Paper
    // 2 Scissors
    value = randint(0, 3)
    return value
}
function HumanSetValue () {
    if (input.pinIsPressed(TouchPin.P0)) {
        // 0 Rock
        value = 0
        basic.showString("R")
        return value
    }
    if (input.pinIsPressed(TouchPin.P1)) {
        // 1 Paper
        value = 1
        basic.showString("P")
        return value
    }
    if (input.pinIsPressed(TouchPin.P2)) {
        // 2 Scissors
        value = 2
        basic.showString("S")
        return value
    }
    return 0
}
let value = 0
radio.setGroup(1)
value = 0
