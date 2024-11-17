let kaverit = [];

// Kaverilista versio 1
function versio1(){
    kaverit = []; 
    for (let i = 1; i <= 10; i++) {
        let nimi = prompt(`Anna kaverin ${i} nimi:`);
        if (nimi === null) { 
            alert("Nimien lisääminen peruttiin.");
            break;
        }if (nimi.trim() === "") {
            alert("Muista kirjoittaa kaverin nimi!");
            i--; 
        } else {
            kaverit.push(nimi);
        }
    }
    displayKaveritVersio1();
}

function displayKaveritVersio1() {
    const kaveriLista1 = document.getElementById("kaveriLista1");
    kaveriLista1.innerHTML = kaverit.map(kaveri => `<li>${kaveri}</li>`).join("");
    kaverit = [];
}

// Kaverilista versio 2
function lisää() {
    console.log("1")
    const uusiKaveri = document.getElementById("uusiKaveri").value.trim();
    if (uusiKaveri) {
        kaverit.push(uusiKaveri);
        document.getElementById("uusiKaveri").value = "";
        displayKaveritVersio2();
    } else {
        alert("Muista kirjoittaa kaverin nimi!");
    }
}

function displayKaveritVersio2() {
    const kaveriLista2 = document.getElementById("kaveriLista2");
    kaveriLista2.innerHTML = kaverit.map((kaveri, index) =>
        `<li>${kaveri} <button onclick="poista(${index})">Poista</button></li>`
    ).join("");
}

function poista(index) {
    kaverit.splice(index, 1);
    displayKaveritVersio2();
}

function järjestä() {
    kaverit.sort();
    displayKaveritVersio2();
}

