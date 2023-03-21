input.onButtonPressed(Button.A, function () {
    buttonApressed = true
    basic.clearScreen()
    basic.pause(randint(1000, 10000))
    music.playTone(698, music.beat(BeatFraction.Whole))
    gameStarted = true
})
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
    if (gameStarted == true) {
        if (lightSensorData < 200) {
            gameEnded = true
        }
    }
})
