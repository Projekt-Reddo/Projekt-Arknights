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

const wrapper = document.querySelector("#wrapper");
const icon = document.querySelector(".icon");
const table = document.querySelector(".table");

wrapper.addEventListener('click', () => {
    icon.classList.toggle("close");
    table.classList.toggle("open");
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
