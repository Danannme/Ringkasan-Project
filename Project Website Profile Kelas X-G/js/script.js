const menuIcon = document.querySelector('.menu .menu-icon input'); 
const nav = document.querySelector('.menu ul');

menuIcon.addEventListener('click', function() {
    nav.classList.toggle('slide');
});