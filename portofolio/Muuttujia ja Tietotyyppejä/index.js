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