function showLetter() {
    const word = document.getElementById('word').value
    let index = Number(document.getElementById('index').value)

    let letter = word.at(index - 1)
    document.getElementById('showLet').innerHTML = letter
}

function showIndex() {
    let word1 = document.getElementById('text1').value
    let word2 = document.getElementById('text2').value

    let index = word1.indexOf(word2)
    document.getElementById('showIndx').innerHTML = index + 1
}

function showWord() {
    let word = document.getElementById('cuttableWord').value
    let index1 = document.getElementById('index1').value
    let index2 = document.getElementById('index2').value

    let cutWord = word.slice(index1 - 1, index2 - 1)
    document.getElementById('showWrd').innerHTML = cutWord
}

function showHJK() {
    let word = document.getElementById('searchableWord').value
    let search = document.getElementById('search').value
    let replace = document.getElementById('replace').value

    let searchWord = word.replaceAll(search, replace)
    document.getElementById('showHJK').innerHTML = searchWord
}

function showPJP() {
    let sana1 = document.getElementById('sana1').value
    let sana2 = document.getElementById('sana2').value

    let poikkiJaPinoon = sana1.split(sana2)
    for (let sana of poikkiJaPinoon) {
        let element = document.createElement('li')
        element.innerHTML = sana
        document.getElementById('showPJP').append(element)
    }
    
}