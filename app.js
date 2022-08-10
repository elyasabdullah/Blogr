



// Get Elements
let connectBtn = document.querySelector('.head nav .btns button:last-child i');
let connectContent = document.querySelector('.head .connect');
let iconToShowNav = document.querySelector('.btns-to-show-icons');
let nav = document.querySelector('.head nav')

console.log(connectBtn)
console.log(iconToShowNav)

connectBtn.addEventListener('click', () => {
    connectContent.classList.toggle('none')
});

iconToShowNav.addEventListener('click', function() {
    nav.classList.toggle('none');
})
