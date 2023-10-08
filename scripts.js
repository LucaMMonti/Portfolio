

let menu = document.getElementById('menu');
let toggle_open = document.getElementById('toggle_open');
let toggle_close = document.getElementById('toggle_close');

toggle_open.addEventListener('click', toggleMenu);
toggle_close.addEventListener('click', toggleMenu);

function toggleMenu() {
  menu.classList.toggle('show-menu');

  if(menu.classList.contains('show-menu')) {
    toggle_open.style.display = 'none';
    toggle_close.style.display = 'block';
  }
  else {
    toggle_open.style.display = 'block';
    toggle_close.style.display = 'none';
  }
}

document.addEventListener('scroll', function() {
  let header = document.querySelector('header');
  
  let inicioPos = document.querySelector('#Inicio').offsetTop;
  let acercaPos = document.querySelector('#Acerca').offsetTop;
  let portfolioPos = document.querySelector('#Portfolio').offsetTop;

  // Si estás dentro de la sección "Acerca de mí"
  if (window.scrollY >= acercaPos && window.scrollY < portfolioPos) {
      header.classList.add('header-acerca-color');
  } else {
      header.classList.remove('header-acerca-color');
  }
});

