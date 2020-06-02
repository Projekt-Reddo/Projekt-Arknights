const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const Rhodes = document.querySelector(".Rhodes");
const headline = document.querySelector(".headline");


const tl = new TimelineMax();

tl.fromTo(hero,1, {height: "0%"}, {height: "80%", ease:Power2.easeInOut})
    .fromTo(hero, 1.2, { width: "100%" }, { width: "80%", ease: Power2.easeInOut})
    .fromTo(slider, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut}, "-=1.2")
    .fromTo(logo, 0.5, {opacity: 0, x: 30},{opacity: 1, x: 0}, "-=0.5")

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

// hamburger.addEventListener('click', () => {
//     navLinks.classList.toggle("open");
// })
const wrapper = document.querySelector("#wrapper");
const icon = document.querySelector(".icon");

wrapper.addEventListener('click', () => {
    icon.classList.toggle("close");
});

const imgExia = document.querySelector(".imgExia");
const ExiaE0 = document.querySelector(".ExiaE0");
const ExiaE2 = document.querySelector(".ExiaE2");

ExiaE2.classList.toggle("hide");
ExiaE0.classList.toggle("appear");

imgExia.addEventListener('mouseover', () => {
    ExiaE0.classList.toggle("hide");
    ExiaE2.classList.toggle("appear");
    ExiaE0.classList.toggle("appear");
    ExiaE2.classList.toggle("hide");
});

const imgSaria = document.querySelector(".imgSaria");
const SariaE0 = document.querySelector(".SariaE0");
const SariaE2 = document.querySelector(".SariaE2");

SariaE2.classList.toggle("hide");
SariaE0.classList.toggle("appear");

imgSaria.addEventListener('mouseover', () => {
    SariaE0.classList.toggle("hide");
    SariaE2.classList.toggle("appear");
    SariaE0.classList.toggle("appear");
    SariaE2.classList.toggle("hide");
});

const imgMostima = document.querySelector(".imgMostima");
const MostimaE0 = document.querySelector(".MostimaE0");
const MostimaE2 = document.querySelector(".MostimaE2");

MostimaE2.classList.toggle("hide");
MostimaE0.classList.toggle("appear");

imgMostima.addEventListener('mouseover', () => {
    MostimaE0.classList.toggle("hide");
    MostimaE2.classList.toggle("appear");
    MostimaE0.classList.toggle("appear");
    MostimaE2.classList.toggle("hide");
});

const imgNight = document.querySelector(".imgNight");
const NightE0 = document.querySelector(".NightE0");
const NightE2 = document.querySelector(".NightE2");

NightE2.classList.toggle("hide");
NightE0.classList.toggle("appear");

imgNight.addEventListener('mouseover', () => {
    NightE0.classList.toggle("hide");
    NightE2.classList.toggle("appear");
    NightE0.classList.toggle("appear");
    NightE2.classList.toggle("hide");
});

const imgWeedy = document.querySelector(".imgWeedy");
const WeedyE0 = document.querySelector(".WeedyE0");
const WeedyE2 = document.querySelector(".WeedyE2");

WeedyE2.classList.toggle("hide");
WeedyE0.classList.toggle("appear");

imgWeedy.addEventListener('mouseover', () => {
    WeedyE0.classList.toggle("hide");
    WeedyE2.classList.toggle("appear");
    WeedyE0.classList.toggle("appear");
    WeedyE2.classList.toggle("hide");
});
