// Abrir a barra de menu
document.querySelector('.open-menu').addEventListener('click', e => {

    document.querySelector('header .menu').classList.add('open');

});

// Fechar a barra de menu
document.querySelector('.close-menu button').addEventListener('click', e => {

    document.querySelector('header .menu').classList.remove('open');

});

// Fechar a barra de menu pelo backdrop
document.querySelector('.menu .backdrop').addEventListener('click', e => {

    document.querySelector('header .menu').classList.remove('open');

});