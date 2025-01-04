// script.js

// Fonction pour afficher/masquer le menu de navigation
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('show'); // Ajoute ou retire la classe 'show'
}

// Ajoute des animations aux icônes du menu hamburger
document.querySelector('.menu-icon').addEventListener('click', () => {
    const spans = document.querySelectorAll('.menu-icon span');
    spans[0].classList.toggle('rotate-down');
    spans[1].classList.toggle('fade-out');
    spans[2].classList.toggle('rotate-up');
});

// Animation du menu hamburger
document.querySelector('.menu-icon').addEventListener('click', () => {
    document.querySelector('.menu-icon').classList.toggle('open');
});
