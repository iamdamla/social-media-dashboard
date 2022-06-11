const toggleEl = document.querySelector(".toggle__over");
const toggleFillEl = document.querySelector(".toggle__fill");
const headerEl = document.querySelector("header");
const bodyEl = document.querySelector("body");
const cardEls = document.querySelectorAll(".sm-box, .overview-box");
const headerTitleEl = document.querySelector(".title__item");
const overviewTitleEl = document.querySelector(".overview__title");
const titleEls = document.querySelectorAll(".card-title");
const textEls = document.querySelectorAll(".follow-numbers span, .views");

toggleEl.addEventListener("click", () => {
  toggleFillEl.classList.toggle("toggle__dark");
  toggleEl.classList.toggle("toggle__left");
  headerEl.classList.toggle("header-bg");
  bodyEl.classList.toggle("dark-bg");
  headerTitleEl.classList.toggle("text-white");
  overviewTitleEl.classList.toggle("text-white");
  cardEls.forEach((element) => {
    element.classList.toggle("card-bg");
  });
  titleEls.forEach((element) => {
    element.classList.toggle("dark-card-title");
  });
  textEls.forEach((element) => {
    element.classList.toggle("text-white");
  });
});
