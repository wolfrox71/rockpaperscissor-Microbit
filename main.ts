radio.onReceivedNumber(function (receivedNumber) {
    // make sure you are not playing against the computer
    if (againstComputer == 0) {
    	
    }
})
function ComputerSetValue () {
    // 0 Rock
    // 1 Paper
    // 2 Scissors
    value = randint(0, 3)
    return value
}
function HumanSetValue () {
    while (value == -1) {
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
    }
    return 0
}
let againstComputer = 0
let value = 0
value = -1
againstComputer = -1
while (againstComputer == -1) {
    // while the play mode has not been selected
    if (input.buttonIsPressed(Button.A)) {
        againstComputer = 0
        basic.showString("R")
        radio.setGroup(1)
    }
    if (input.buttonIsPressed(Button.B)) {
        againstComputer = 1
        basic.showString("S")
        radio.setGroup(1)
    }
}
HumanSetValue()
