"use strict";
function contaVogais(input) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let forminput = false;
    if (!input) {
        const element = document.getElementById('palavra');
        input = element.value;
        forminput = true;
    }
    let palavra = input.toLowerCase();
    let resultado = palavra.split('').filter(letra => vogais.includes(letra)).length;
    if (forminput) {
        const element2 = document.getElementById('resultado');
        element2.textContent = `A quantidade de vogais é ${resultado}`;
    }
    return resultado;
}
// previne o formulário de atualizar a página
const formElement = document.getElementById('formulario');
formElement.addEventListener('submit', function (event) {
    event.preventDefault();
});
console.log(`A quantidade de vogais é ${contaVogais('Suzane')}`);
