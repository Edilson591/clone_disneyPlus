document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelectorAll("[data-tab-button]");
  const questions = document.querySelectorAll("[data-faq-question]");

  const hero = document.querySelector(".hero");
  const heigthHero = hero.clientHeight;
  console.log(heigthHero);

  window.addEventListener("scroll", () => {
    const scrollReally = window.scrollY;
    if (scrollReally < heigthHero) {
      mostrarHeader();
    } else {
      ocutarHeader();
    }
  });

  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", (e) => {
      const abaAlvo = e.target.dataset.tabButton;
      const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
      escondeTodasAbas();
      aba.classList.add("shows__list--is-active");
      removeBottonAtivo();
      e.target.classList.add("shows__tabs__button--is-active");
    });
  }

  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", openQuestion);
  }
});

function mostrarHeader() {
  const isHidden = document.querySelector("header");
  isHidden.classList.add("header--is-hidden");
}
function ocutarHeader() {
  const isHidden = document.querySelector("header");
  isHidden.classList.remove("header--is-hidden");
}

function openQuestion(question) {
  const closeQuestion = "faq__questions__item--is-open";
  const questions = question.target.parentNode;
  questions.classList.toggle(closeQuestion);
}

function removeBottonAtivo() {
  const buttons = document.querySelectorAll("[data-tab-button]");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("shows__tabs__button--is-active");
  }
}

function escondeTodasAbas() {
  const tabsContainer = document.querySelectorAll("[data-tab-id]");

  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove("shows__list--is-active");
  }
}
