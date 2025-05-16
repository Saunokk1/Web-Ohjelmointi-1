let a, b, c, d;

a = 3;
b = 5
c = 7;
d = 15;

function summa(eka, toka) {
    vastaus = eka + toka;
    alert(vastaus);
    return vastaus;
}

function vahennys(a, b) {
    vastaus = a - b;
    alert(vastaus);
    return vastaus;
}

function kerto(a, b) {
    vastaus = a * b;
    alert(vastaus);
    return vastaus;
}

function jako(a, b) {
    vastaus = a / b;
    alert(vastaus);
    return vastaus;
}

function laskin_summa() {
    eka = Number(document.getElementById('numero1').value);
    toka = Number(document.getElementById('numero2').value);
    vastaus = summa(eka, toka);
}

function laskin_vahennys() {
    eka = Number(document.getElementById('numero1').value);
    toka = Number(document.getElementById('numero2').value);
    vastaus = vahennys(eka, toka);
}

function laskin_kerto() {
    eka = Number(document.getElementById('numero1').value);
    toka = Number(document.getElementById('numero2').value);
    vastaus = kerto(eka, toka);
}

function laskin_jako() {
    eka = Number(document.getElementById('numero1').value);
    toka = Number(document.getElementById('numero2').value);
    vastaus = jako(eka, toka);
}

const viikonpaivat = ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"]
const kuukaudet = ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"]

function showTime() {
    var paivamaara = document.getElementById('paivamaara');
    var aika = document.getElementById('aika');
    var paivaJaAika = document.getElementById('paivaJaAika');
    var viikonpaiva = document.getElementById('viikonpaiva');
    var kuukausi = document.getElementById('kuukausi');

    var paivamaaraP = document.createElement('p')
    var currentDate = new Date();
    paivamaara.innerHTML = ""
    paivamaaraP.innerHTML = currentDate.toLocaleDateString();
    paivamaara.append(paivamaaraP)

    var aikaP = document.createElement('p')
    aika.innerHTML = ""
    aikaP.innerHTML = currentDate.toLocaleTimeString();
    aika.append(aikaP)

    var paivaJaAikaP = document.createElement('p')
    paivaJaAika.innerHTML = ""
    paivaJaAikaP.innerHTML = currentDate.toLocaleString();
    paivaJaAika.append(paivaJaAikaP)

    var viikonpaivaP = document.createElement('p')
    let paiva = viikonpaivat[currentDate.getDay()]
    viikonpaiva.innerHTML = ""
    viikonpaivaP.innerHTML = paiva
    viikonpaiva.append(viikonpaivaP)
    

    var kuukausiP = document.createElement('p')
    let kuu = kuukaudet[currentDate.getDay() - 1]
    kuukausi.innerHTML = ""
    kuukausiP.innerHTML = kuu
    kuukausi.append(kuukausiP)
}


var veijoOikeudet = new Set(['luku', 'poisto']);
var elviraOikeudet = new Set(['luku', 'kirjoitus', 'muokkaus']);
var mehdiOikeudet = new Set(['luku', 'muokkaus', 'poisto']);
var tuuliOikeudet = new Set(['kirjoitus', 'poisto']);

var veijoUl = document.getElementById('veijo').querySelector('ul');
veijoUl.innerHTML = "";

for (oikeus of veijoOikeudet) {
    var element = document.createElement('li');
    element.innerHTML = oikeus;
    veijoUl.append(element);
}

var elviraUl = document.getElementById('elvira').querySelector('ul');
elviraUl.innerHTML = "";

for (oikeus of elviraOikeudet) {
    var element = document.createElement('li');
    element.innerHTML = oikeus;
    elviraUl.append(element);
}

var mehdiUl = document.getElementById('mehdi').querySelector('ul');
mehdiUl.innerHTML = "";

for (oikeus of mehdiOikeudet) {
    var element = document.createElement('li');
    element.innerHTML = oikeus;
    mehdiUl.append(element);
}

var tuuliUl = document.getElementById('tuuli').querySelector('ul');
tuuliUl.innerHTML = "";

for (oikeus of tuuliOikeudet) {
    var element = document.createElement('li');
    element.innerHTML = oikeus;
    tuuliUl.append(element);
}

var veijotuuli = document.getElementById('veijotuuli');
veijotuuli.innerHTML = ""

var veijotuuliOikeudet = veijoOikeudet.union(tuuliOikeudet)

for (oikeus of veijotuuliOikeudet) {
    var element = document.createElement('li');
    element.innerHTML = oikeus;
    veijotuuli.append(element);
}

var mehdielvira = document.getElementById('mehdielvira');
mehdielvira.innerHTML = "";

var mehdielviraOikeudet = mehdiOikeudet.intersection(elviraOikeudet);

for (oikeus of mehdielviraOikeudet) {
    var element = document.createElement('li');
    element.innerHTML = oikeus;
    mehdielvira.append(element)
}

var elviratuuli = document.getElementById('elviratuuli');
elviratuuli.innerHTML = "";

var elviratuuliOikeudet = elviraOikeudet.difference(tuuliOikeudet);

for (oikeus of elviratuuliOikeudet) {
    var element = document.createElement('li');
    element.innerHTML = oikeus;
    elviratuuli.append(element)
}

