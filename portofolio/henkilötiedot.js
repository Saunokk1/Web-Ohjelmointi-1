const henkilot = [
            {
                name: "Merja Meikäläinen",
                age: 20,
                job: "Opiskelija",
                driversLicense: true
            },

            {
                name: "Teppo Teikäläinen",
                age: 25,
                job: "Sähköteknikko",
                driversLicense: true
            },

            {
                name: "Helena Heikäläinen",
                age: 30,
                job: "Ohjelmistosuunnittelija",
                driversLicense: false
            },

            {
                name: "Semir Sikiläinen",
                age: 18,
                job: "Opiskelija",
                driversLicense: true
            },

            {
                name: "Tomas Täkäläinen",
                age: 22,
                job: "Linja-autonkuljettaja",
                driversLicense: true
            }
            ];

function luoRivit() {
    var rivit = document.getElementById('rivit');
    rivit.innerHTML = "";
    väli = "";

    for (var henkilo of henkilot) {
        var rivi = document.createElement('tr');

        for (var [key, value] of Object.entries(henkilo)) {
            var solu = document.createElement('td');

            if (key == "age") {

                if (value > 17) {
                    value = value + "🍺"
                }
            }

            else if (key == "job") {

                if (value.toLowerCase() == "opiskelija") {
                    value = value + "🎓"
                }
            }

            solu.innerHTML = value;
            console.log(`${value}`);
            rivi.append(solu);
        }
        
        rivit.append(rivi)
    }
}

function lisääHenkilö(event) {
    event.preventDefault();
    
    var nimi = document.getElementById('nimi').value
    var ikä = Number(document.getElementById('ikä').value)
    var työ = document.getElementById('työ').value
    var ajokortti = Boolean(document.getElementById('ajokortti').value)
    
    if (ikä < 0) {
        alert("Iän pitää olla positiivinen luku!")
    }

    else {
        var henkilotNew = {}
        henkilotNew.name = nimi
        henkilotNew.age = ikä
        henkilotNew.job = työ
        henkilotNew.driversLicense = ajokortti

        henkilot.push(henkilotNew)
        luoRivit()
    }

}

luoRivit()

