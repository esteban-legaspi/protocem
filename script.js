/* --- LÓGICA DEL MENÚ DINÁMICO --- */
let lastScrollY = window.scrollY;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        navbar.classList.add('encabezado--hidden');
    } else {
        navbar.classList.remove('encabezado--hidden');
    }   
    lastScrollY = window.scrollY;
});