/* 
========================
    Image Carousel
========================
*/

const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".carousel-button");

let current = 0;
let prev = 7;
let next = 1;

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => (i == 0 ? gotoPrev() : gotoNext()));
}

const gotoPrev = () =>
  current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () => (current < 7 ? gotoNum(current + 1) : gotoNum(0));

const gotoNum = (number) => {
  current = number;
  prev = current - 1;
  next = current + 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("current");
    slides[i].classList.remove("prev");
    slides[i].classList.remove("next");
  }

  if (next == 8) {
    next = 0;
  }

  if (prev == -1) {
    prev = 7;
  }

  slides[current].classList.add("current");
  slides[prev].classList.add("prev");
  slides[next].classList.add("next");
};
