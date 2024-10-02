function contaVogais( input?: string): number {
    const vogais: string[] = ['a', 'e', 'i', 'o', 'u'] 

    let forminput : boolean = false
    
    if (!input) {
        const element = document.getElementById('palavra') as HTMLInputElement
        input = element.value
        forminput = true
    }

    let palavra: string = input.toLowerCase();
    let resultado : number = palavra.split('').filter(letra => vogais.includes(letra)).length;
    
    if (forminput) {
        const element2 = document.getElementById('resultado') as HTMLElement
        element2.textContent = `A quantidade de vogais é ${resultado}`
    }

    return resultado

}


// previne o formulário de atualizar a página
const formElement = document.getElementById('formulario') as HTMLFormElement

formElement.addEventListener('submit', function(event: Event) {
    event.preventDefault();
})


console.log(`A quantidade de vogais é ${contaVogais('Suzane')}`)