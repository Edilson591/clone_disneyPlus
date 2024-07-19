document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelectorAll("[data-tab-button]");
    
    
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", (e) => {
           const abaAlvo = e.target.dataset.tabButton;
           const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
           escondeTodasAbas();
           aba.classList.add("shows__list--is-active");
           removeBottonAtivo();
           e.target.classList.add('shows__tabs__button--is-active');
        })
        
    }
})

function removeBottonAtivo() {
    const buttons =  document.querySelectorAll("[data-tab-button]");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
        
    }


}


function escondeTodasAbas() {
    const tabsContainer =  document.querySelectorAll("[data-tab-id]");

    for (let i = 0; i < tabsContainer .length; i++) {
        tabsContainer[i].classList.remove("shows__list--is-active")
        
    }
}