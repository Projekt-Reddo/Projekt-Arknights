const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const Rhodes = document.querySelector(".Rhodes");
const headline = document.querySelector(".headline");


const tl = new TimelineMax();

//transition effect when start or restart
tl.fromTo(hero,1, {height: "0%"}, {height: "80%", ease:Power2.easeInOut})
    .fromTo(hero, 1.2, { width: "100%" }, { width: "80%", ease: Power2.easeInOut})
    .fromTo(slider, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut}, "-=1.2")
    .fromTo(logo, 0.5, {opacity: 0, x: 30},{opacity: 1, x: 0}, "-=0.5")

const wrapper = document.querySelector("#wrapper");
const icon = document.querySelector(".icon");
const table = document.querySelector(".table");

//open the menu when click on the hamburger button
wrapper.addEventListener('click', () => {
    icon.classList.toggle("close");
    table.classList.toggle("open");
});

// close menu bar when click outside the menu
window.addEventListener('click', function(e){
    if ((!table.contains(e.target)) && (!wrapper.contains(e.target))) {
        icon.classList.remove("close");
        table.classList.remove("open");
    }
});

const imgExia = document.querySelector(".imgExia");
const ExiaE0 = document.querySelector(".ExiaE0");
const ExiaE2 = document.querySelector(".ExiaE2");

//set default
ExiaE2.classList.toggle("hide");
ExiaE0.classList.toggle("appear");

//change effect when mouse in 
imgExia.addEventListener('mouseover', () => {
    ExiaE0.classList.toggle("hide");
    ExiaE2.classList.toggle("appear");
    ExiaE0.classList.toggle("appear");
    ExiaE2.classList.toggle("hide");
});

const imgSaria = document.querySelector(".imgSaria");
const SariaE0 = document.querySelector(".SariaE0");
const SariaE2 = document.querySelector(".SariaE2");

//set default
SariaE2.classList.toggle("hide");
SariaE0.classList.toggle("appear");

//change effect when mouse in 
imgSaria.addEventListener('mouseover', () => {
    SariaE0.classList.toggle("hide");
    SariaE2.classList.toggle("appear");
    SariaE0.classList.toggle("appear");
    SariaE2.classList.toggle("hide");
});

const imgAngel = document.querySelector(".imgAngel");
const AngelE0 = document.querySelector(".AngelE0");
const AngelE2 = document.querySelector(".AngelE2");

AngelE2.classList.toggle("hide");
AngelE0.classList.toggle("appear");

imgAngel.addEventListener('mouseover', () => {
    AngelE0.classList.toggle("hide");
    AngelE2.classList.toggle("appear");
    AngelE0.classList.toggle("appear");
    AngelE2.classList.toggle("hide");
});

const imgTexas = document.querySelector(".imgTexas");
const TexasE0 = document.querySelector(".TexasE0");
const TexasE2 = document.querySelector(".TexasE2");

TexasE2.classList.toggle("hide");
TexasE0.classList.toggle("appear");

imgTexas.addEventListener('mouseover', () => {
    TexasE0.classList.toggle("hide");
    TexasE2.classList.toggle("appear");
    TexasE0.classList.toggle("appear");
    TexasE2.classList.toggle("hide");
});

const imgChen = document.querySelector(".imgChen");
const ChenE0 = document.querySelector(".ChenE0");
const ChenE2 = document.querySelector(".ChenE2");

ChenE2.classList.toggle("hide");
ChenE0.classList.toggle("appear");

imgChen.addEventListener('mouseover', () => {
    ChenE0.classList.toggle("hide");
    ChenE2.classList.toggle("appear");
    ChenE0.classList.toggle("appear");
    ChenE2.classList.toggle("hide");
});

const imgMostima = document.querySelector(".imgMostima");
const MostimaE0 = document.querySelector(".MostimaE0");
const MostimaE2 = document.querySelector(".MostimaE2");

//set default
MostimaE2.classList.toggle("hide");
MostimaE0.classList.toggle("appear");

//change effect when mouse in 
imgMostima.addEventListener('mouseover', () => {
    MostimaE0.classList.toggle("hide");
    MostimaE2.classList.toggle("appear");
    MostimaE0.classList.toggle("appear");
    MostimaE2.classList.toggle("hide");
});

const imgNight = document.querySelector(".imgNight");
const NightE0 = document.querySelector(".NightE0");
const NightE2 = document.querySelector(".NightE2");

//set default
NightE2.classList.toggle("hide");
NightE0.classList.toggle("appear");

//change effect when mouse in 
imgNight.addEventListener('mouseover', () => {
    NightE0.classList.toggle("hide");
    NightE2.classList.toggle("appear");
    NightE0.classList.toggle("appear");
    NightE2.classList.toggle("hide");
});

const imgWeedy = document.querySelector(".imgWeedy");
const WeedyE0 = document.querySelector(".WeedyE0");
const WeedyE2 = document.querySelector(".WeedyE2");

//set default
WeedyE2.classList.toggle("hide");
WeedyE0.classList.toggle("appear");

//change effect when mouse in 
imgWeedy.addEventListener('mouseover', () => {
    WeedyE0.classList.toggle("hide");
    WeedyE2.classList.toggle("appear");
    WeedyE0.classList.toggle("appear");
    WeedyE2.classList.toggle("hide");
});

// Cursor
const cursor = document.querySelector('.cursor');
window.addEventListener("mousemove", cursor);
document.addEventListener('mousemove', e =>{
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
    });
document.addEventListener('click', () =>{
    cursor.classList.add('expand');
    setTimeout(() => {
    cursor.classList.remove("expand");
}, 500);
}); 

// Animation
AOS.init({
    duration: 1500,
});

// select sections parent
const sections = document.querySelectorAll('section');

// set pointer to screen
let pointer = 0;

// set pointer when click menu
function setPointer(x) {
    check=x.id;
    switch (check) {
        case '0': pointer = 0; break;
        case '1': pointer = 1; break;
        case '2': pointer = 2; break;
        case '3': pointer = 3; break;
        case '4': pointer = 4; break;
        case '5': pointer = 5; break;
        case '6': pointer = 6; break;
        case '7': pointer = 7; break;
        case '8': pointer = 8; break;
    }
}

// set time before effect to 0
let lastTime = 0;

let numOfWheel = 0;

// when 'wheel' of mouse move => effect
window.addEventListener('wheel', (e) => {
    // get 'delta' value to determine wheel up or down
    const delta = e.wheelDelta;
    const currentTime = new Date().getTime();
    if (currentTime - lastTime < 800) {
        e.preventDefault();
        return;
    }
    
    // 'delta' < 0 => wheel down
    if (delta < 0) {
        // if pointer > number of element => return pointer to 8
        if (pointer >8) return;
        pointer++;
        // loop for each element, if number of element = pointer => scroll to that element
        sections.forEach((section, i) => {
            if (i === pointer) {
                section.scrollIntoView({behavior: 'smooth', block: 'center'});
            }
        });
    // 'delta' > 0 => wheel up
    } else if (delta > 0) {
        // if pointer < number of element => return pointer to 1
        if (pointer <1) return;
        pointer--;
        // loop for each element, if number of element = pointer => scroll to that element
        sections.forEach((section, i) => {
            if (i === pointer) {
                section.scrollIntoView({behavior: 'smooth', block: 'center'});
            }
        });
    }
    lastTime = currentTime;
});

// when press keyboard => effect
window.addEventListener('keydown', (e) => {
    
    // if 'wheel' many time in effect duration => prevent event
    const currentTime = new Date().getTime();
    if (currentTime - lastTime < 800) {
        e.preventDefault();
        return;
    }
    
    // if press 'arrow down' => wheel down
    if (event.isComposing || event.keyCode === 40) {
        // if pointer > number of element => return pointer to 8
        if (pointer >8) return;
        pointer++;
        // loop for each element, if number of element = pointer => scroll to that element
        sections.forEach((section, i) => {
            if (i === pointer) {
                section.scrollIntoView({behavior: 'smooth'});
            }
        });
    
    // if press 'arrow up' => wheel up
    } else if (event.isComposing || event.keyCode === 38) {
        // if pointer < number of element => return pointer to 1
        if (pointer <1) return;
        pointer--;
        // loop for each element, if number of element = pointer => scroll to that element
        sections.forEach((section, i) => {
            if (i === pointer) {
                section.scrollIntoView({behavior: 'smooth'});
            }
        });
    }
    lastTime = currentTime;
});
