document.addEventListener('DOMContentLoaded', function() {
    const urlAtual = window.location.href;
    const inputElement = document.getElementById('input');
    const addButton = document.getElementById('adicionar');
    const removeButton = document.getElementById('remover');
    const displayArea = document.createElement('div');
    document.body.appendChild(displayArea);

    displayArea.id = 'displayArea';
    document.body.appendChild(displayArea);

    inputElement.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            addButton.click();
        }
    });

    if (urlAtual.includes('fila-home.html')) {
        const fila = [];
        addButton.onclick = function() {
            fila.push(inputElement.value);
            inputElement.value = '';
            updateDisplay('Fila: ' + fila.join(', '));
        };
        removeButton.onclick = function() {
            if (fila.length > 0) {
                fila.shift();
                updateDisplay('Fila: ' + fila.join(', '));
            } else {
                alert('A fila está vazia!');
            }
        };
    } else if (urlAtual.includes('pilha.html')) {
        const pilha = [];
        addButton.onclick = function() {
            pilha.push(inputElement.value);
            inputElement.value = '';
            updateDisplay('Pilha: ' + pilha.join(', '));
        };
        removeButton.onclick = function() {
            if (pilha.length > 0) {
                pilha.pop();
                updateDisplay('Pilha: ' + pilha.join(', '));
            } else {
                alert('A pilha está vazia!');
            }
        };
    } else if (urlAtual.includes('lista.html')) {
        const lista = [];
        addButton.onclick = function() {
            lista.push(inputElement.value);
            inputElement.value = '';
            updateDisplay('Lista: ' + lista.join(', '));
        };
        removeButton.onclick = function() {
            if (lista.length > 0) {
                lista.shift();
                updateDisplay('Lista: ' + lista.join(', '));
            } else {
                alert('A lista está vazia!');
            }
        };
    }

    function updateDisplay(text) {
        displayArea.innerHTML = text;
    }
});