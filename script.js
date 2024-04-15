let fila = document.getElementById('fila');
let pilha = document.getElementById('pilha');
let lista = document.getElementById('lista');

document.addEventListener('DOMContentLoaded', function() {
    let urlAtual = window.location.href;
    let linksMenu = document.querySelectorAll('.menu__item a');

    linksMenu.forEach(function(link) {
        if (link.href === urlAtual) {
            link.classList.add('menu__item-active');
        }
    });
});

let inputElement = document.getElementById('input');
let placeholderText = inputElement.placeholder;
let originalPlaceholderText = placeholderText;

inputElement.addEventListener('mousedown', function() {
    inputElement.placeholder = "";

    inputElement.addEventListener('blur', function (){
        inputElement.placeholder = originalPlaceholderText;
    })
});

