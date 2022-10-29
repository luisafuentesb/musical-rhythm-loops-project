music.setTempo(120)
basic.forever(function () {
    music.setVolume(255)
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    music.setVolume(51)
    music.playTone(494, music.beat(BeatFraction.Half))
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . . # . .
        . . . . .
        `)
})
