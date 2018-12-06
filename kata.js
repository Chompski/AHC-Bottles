function bottles() {
    let bottles = 99
    let soberLyrics = ['bottles', 'pass']
    let drunkLyrics = ['bottlesh', 'passh']

    let Lyrics = ['of beer on the wall,', 'bottles of beer,', 'you take one down,', 'it around', 'bottles of beer on the wall.']


    for (let i = 0; i < bottles;) {
        if (bottles > 50) {
            console.log(bottles + ' ' + soberLyrics[0] + ' ' + Lyrics[0] + ' ' + bottles + ' ' + Lyrics[1] + ' ')
            bottles--
            console.log(Lyrics[2] + ' ' + soberLyrics[1] + ' ' + Lyrics[3] + ' ' + bottles + ' ' + Lyrics[4])
        }
        if (bottles <= 50) {
            console.log(bottles + ' ' + drunkLyrics[0] + ' ' + Lyrics[0] + ' ' + bottles + ' ' + Lyrics[1] + ' ')
            bottles--
            console.log(Lyrics[2] + ' ' + drunkLyrics[1] + ' ' + Lyrics[3] + ' ' + bottles + ' ' + Lyrics[4])
        }
    }


}











module.exports = { bottles };