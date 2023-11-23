radio.onReceivedNumber(function (receivedNumber) {
    // make sure you are not playing against the computer
    if (againstComputer == false) {
        if (receivedNumber < 3 && receivedNumber >= 0) {
            basic.showString("Rec" + receivedNumber)
            p2Val = receivedNumber
        }
    }
})
function ComputerSetValue () {
    return randint(0, 2)
}
function getValues () {
    basic.pause(200)
    p1Val = HumanSetValue()
    if (againstComputer == true) {
        p2Val = ComputerSetValue()
    } else {
        basic.showString("p1" + p1Val)
        radio.sendNumber(p1Val)
        p2Val = -1
    }
}
function winner () {
    // If You Are Playing against the computer
    if (p1Val == p2Val) {
        basic.showString("D")
    } else if (p1Val == p2Val + 1 || p1Val == 0 && p2Val == 2) {
        basic.showString("p1")
    } else {
        basic.showString("p2")
    }
    basic.showString("p2" + p2Val)
}
function setup () {
    radioGroup = -1
    changed = -1
    while (changed == -1) {
        // while the play mode has not been selected
        if (input.buttonIsPressed(Button.A)) {
            againstComputer = false
            changed = 1
            radioGroup = 1
            while (!(input.buttonIsPressed(Button.AB))) {
                basic.showString("" + (radioGroup))
                if (input.buttonIsPressed(Button.A)) {
                    if (radioGroup > 1) {
                        radioGroup = radioGroup - 1
                    }
                    continue;
                }
                if (input.buttonIsPressed(Button.B)) {
                    if (radioGroup < 254) {
                        radioGroup = radioGroup + 1
                    }
                    continue;
                }
            }
            radio.setGroup(radioGroup)
            break;
        }
        if (input.buttonIsPressed(Button.B)) {
            changed = 1
            againstComputer = true
            basic.showString("S")
            radio.setGroup(1)
            break;
        }
    }
}
function HumanSetValue () {
    while (radioGroup == -1) {
        if (input.pinIsPressed(TouchPin.P0)) {
            basic.showString("R")
            return 0
        }
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showString("P")
            return 1
        }
        if (input.pinIsPressed(TouchPin.P2)) {
            basic.showString("S")
            return 2
        }
    }
    return 0
}
let changed = 0
let radioGroup = 0
let p1Val = 0
let againstComputer = false
let p2Val = 0
setup()
getValues()
while (p2Val == -1) {
    basic.pause(100)
}
winner()
