input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("MONKEY")
    for (let index = 0; index < 4; index++) {
        music.playMelody("C5 G A E E G C5 B ", 129)
        music.setVolume(255)
        music.ringTone(9100)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Chessboard)
})
basic.showIcon(IconNames.Ghost)
