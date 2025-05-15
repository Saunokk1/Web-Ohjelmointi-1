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

var rivit = document.getElementById('rivit');
    rivit.innerHTML = "";

function luoRivit() {
    for (var henkilo of henkilot) {
        var rivi = document.createElement('tr');

        for (const [key, value] of Object.entries(henkilo)) {
            var solu = document.createElement('td');
            solu.innerHTML = value;
            console.log(`${value}`);
            rivi.append(solu);
        }
        
        rivit.append(rivi)
    }
}

luoRivit()

