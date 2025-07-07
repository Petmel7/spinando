const toggleButton = document.querySelector('.js-menu-toggle');
const menu = document.querySelector('.js-menu');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('is-open');
});