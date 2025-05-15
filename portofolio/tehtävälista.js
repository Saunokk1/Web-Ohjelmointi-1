var lista = ["Tehtävä1", "Tehtävä2"];

function paivitaLista() {
    var taulukko = document.getElementById('table');
    taulukko.innerHTML = "";

    for (var tehtävä of lista) {
        var element = document.createElement('li');
        element.innerHTML = tehtävä;
        taulukko.append(element);
    }
}

function lisaa() {
    syöte = document.getElementById('syöte').value
    lista.push(syöte)
    console.log(lista)
    paivitaLista()
}

function poista() {
    lista.pop()
    paivitaLista()
}

paivitaLista()