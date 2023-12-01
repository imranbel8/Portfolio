const textElement = document.getElementById('petit-texte');
const text = "Actuellement en BUT Informatique 2ème année, ce portfolio répertorie mon parcours et mes expériences en informatique";
let index = 0;

function writeText() {
    textElement.textContent = text.slice(0, index);
    index++;

    if (index <= text.length) {
        setTimeout(writeText, 50); // Vitesse de frappe en millisecondes
    }
}

writeText();
