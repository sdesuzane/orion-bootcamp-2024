"use strict";
function countVowels(input) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let formInput = false;
    if (!input) {
        const element = document.getElementById('word');
        input = element.value;
        formInput = true;
    }
    let word = input.toLowerCase();
    let result = word.split('').reduce((acc, letter) => { return vowels.includes(letter) ? acc + 1 : acc; }, 0);
    if (formInput) {
        const element2 = document.getElementById('result');
        element2.textContent = `A quantidade de vogais é ${result}`;
    }
    return result;
}
// previne o formulário de atualizar a página
const formElement = document.getElementById('form');
formElement.addEventListener('submit', function (event) {
    event.preventDefault();
});
console.log(`A quantidade de vogais é ${countVowels('Suzane')}`);
