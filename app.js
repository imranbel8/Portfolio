const textElement = document.getElementById('petit-texte');
const text = "Actuellement en BUT Informatique 2ème année, ce portfolio répertorie mon parcours et mes expériences en informatique";
let index = 0;

function writeText() {
    textElement.textContent = text.slice(0, index);
    index++;

    if (index <= text.length) {
        setTimeout(writeText, 25); // Vitesse de frappe en millisecondes
    }
}

writeText();




const allRonds = document.querySelectorAll('.rond');
const allBoxes = document.querySelectorAll('.box');

const controller = new ScrollMagic.Controller()

allBoxes.forEach(box => {

    for(i = 0; i < allRonds.length; i++){

        if(allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')){

            let tween = gsap.from(box, {y: -60, opacity: 0, duration: 0.3})

            let scene = new ScrollMagic.Scene({
                triggerElement: allRonds[i],
                reverse: false
            })
            .setTween(tween)
            .addTo(controller)
        }
    }
})


document.addEventListener('DOMContentLoaded', function () {
    var arrow = document.getElementById('arrowup');
    var formationSection = document.getElementById('formation');

    window.addEventListener('scroll', function () {
        if (window.scrollY >= formationSection.offsetTop) {
            arrow.style.display = 'block';
        } else {
            arrow.style.display = 'none';
        }
    });
});