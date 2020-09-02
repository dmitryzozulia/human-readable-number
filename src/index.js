module.exports = function toReadable (number) {
    const obj ={
        0 : 'zero',
        1 : 'one',
        2 : 'two',
        3 : 'three',
        4 : 'four',
        5 : 'five',
        6 : 'six',
        7 : 'seven',
        8 : 'eight',
        9 : 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'one hundred',
        200: 'two hundred',
        300: 'three hundred',
        400: 'four hundred',
        500: 'five hundred',
        600: 'six hundred',
        700: 'seven hundred',
        800: 'eight hundred',
        900: 'nine hundred'
    }
    if(number <= 20) {
        for (let key in obj) {
            if (number === +key) {
                return obj[key]
            }
        }
    }  else if( number <= 100 && number > 20){
        const first = number - number % 10
        const second = number % 10
        if(second === 0){
            return(`${obj[first]}`)
        }
        return (`${obj[first]} ${obj[second]}`)
    } else if( number > 100){
        for(let key in obj){
            if(number === +key){
                return (obj[key])
            }
        }
        const first = number - number % 100
        const second = number %100 - number % 10
        const third =  number %100 % 10
        if(third === 0){
            return(`${obj[first]} ${obj[second]}`)
        }
        if(number % 100 <= 19){
            return(`${obj[first]} ${obj[number % 100]}`)
        }
        return (`${obj[first]} ${obj[second]} ${obj[third]}`)
    }
}
