function countVowels( input?: string): number {
    const vowels: string[] = ['a', 'e', 'i', 'o', 'u'] 

    let formInput : boolean = false
    
    if (!input) {
        const element = document.getElementById('word') as HTMLInputElement
        input = element.value
        formInput = true
    }

    let word: string = input.toLowerCase();
    let result: number = word.split('').reduce((acc, letter) => { return vowels.includes(letter) ? acc + 1 : acc }, 0);    
    if (formInput) {
        const element2 = document.getElementById('result') as HTMLElement
        element2.textContent = `A quantidade de vogais é ${result}`
    }

    return result

}


// previne o formulário de atualizar a página
const formElement = document.getElementById('form') as HTMLFormElement

formElement.addEventListener('submit', function(event: Event) {
    event.preventDefault();
})


console.log(`A quantidade de vogais é ${countVowels('Suzane')}`)