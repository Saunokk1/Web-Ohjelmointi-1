function noppa() {
    const noppaPrint = document.getElementById("noppa")
    noppaPrint.innerHTML = Math.floor(Math.random() * 6) + 1
}

function lottoGen() {
    i = 0
    numbers = []
    let div = document.getElementById('lotto')
    div.innerHTML = ""
    let element = document.createElement('p')
    for (i = 0; i < 7; i++) {
        lottoNumber = Math.floor(Math.random() * 40) + 1
        numbers.push(lottoNumber)
        element.append(`| ${lottoNumber} | `)
    }
    div.append(element)
    guesses = getAnswers()
    compareAnswers(numbers, guesses)
}

function getAnswers() {
    guesses = []
    for (i = 0; i < 7; i++) {
        guess = Number(document.getElementById(`input${i}`).value)
        guesses.push(guess)
    }
    return guesses
}

function compareAnswers(numbers, guesses) {
    let rightAnswers = 0
    for (number of numbers) {
        for (guess of guesses) {
            if (guess == number) {
                rightAnswers += 1
            }
        }
    }
    if (rightAnswers > 0) {
        rightGuesses = document.getElementById('rightGuesses')
        rightGuesses.innerHTML = `Sait ${rightAnswers}/7 oikein.`
    }

    else {
        rightGuesses = document.getElementById('rightGuesses')
        rightGuesses.innerHTML = `Et saanut yhtään oikein.`
    }
    
}