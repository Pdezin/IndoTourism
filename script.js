const menu = document.querySelector('.menu');

const abrirMenu = () => {
   const navbar = document.querySelector('.nav-bar');
   menu.classList.toggle('active');
   navbar.classList.toggle('active');
}

menu.addEventListener('click', abrirMenu);
