input.onButtonPressed(Button.A, function () {
    buttonApressed = true
    basic.clearScreen()
    basic.pause(randint(1000, 10000))
    music.playTone(698, music.beat(BeatFraction.Whole))
    gameStarted = true
})
let time = 0
let examplePoints = 0
let gameEnded = false
let lightSensorData = 0
let gameStarted = false
let buttonApressed = false
pins.setAudioPin(AnalogPin.P2)
let tm = TM1637.create(
DigitalPin.P1,
DigitalPin.P15,
10,
4
)
buttonApressed = false
basic.forever(function () {
    lightSensorData = pins.analogReadPin(AnalogPin.P0)
    while (buttonApressed == false) {
        images.arrowImage(ArrowNames.West).showImage(0)
        gameStarted = false
    }
    while (gameEnded == true) {
        basic.clearScreen()
        tm.showNumber(examplePoints)
        gameStarted = false
        basic.showNumber(time)
        basic.showString("seconds")
        examplePoints = 0
        time = 0
        buttonApressed = false
        gameEnded = false
    }
    if (gameStarted == true) {
        if (lightSensorData < 200) {
            gameEnded = true
        } else if (gameEnded == false) {
            tm.showNumber(time)
            time += 1
            basic.pause(1000)
        }
    }
})
