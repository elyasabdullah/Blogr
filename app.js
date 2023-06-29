



// Get Elements
let iconToShowNav = document.querySelector('.btns-to-show-icons');
let nav = document.querySelector('.head nav')


iconToShowNav.addEventListener('click', function() {
    nav.classList.toggle('none');
})
