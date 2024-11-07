const ask = require('readline-sync')

// 1. Crie uma função que receba um número e retorne a soma de todos os números de 1 até o número informado usando um laço `while`.

function somaAteNumero(n) {
    let soma = 0
    let i = 1
    while (i <= n) {
        soma += i
        i++
    }
    return soma
}
const numero = 100
const resultado = somaAteNumero(numero)
console.log(`Soma de 1 até ${numero} é ${resultado}`)

// Exemplo de chamada:
// console.log(somaAteNumero(5));  // 15 (1+2+3+4+5)

// 2. Crie uma função que receba um array de números e retorne a soma de todos os números maiores que 10 usando um laço `for`.

function somaMaioresQueDez(arr) {
    let soma = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            soma += arr[i]
        }
    }
    return soma
}
const numeros = [10, 150, 100, 8, 24, 7, 50]
const resultado2 = somaMaioresQueDez(numeros)
console.log(`Soma dos numeros acima de 10 é ${resultado2}`)

// Exemplo de chamada:
// console.log(somaMaiorQueDez([5, 15, 3, 20, 7]));  // 35 (15 + 20)

// 3. Crie uma função que, dado um array de filmes, retorne o nome do primeiro filme cujo título tem mais de 5 letras usando o `for...of`.
// Exemplo de chamada:
// console.log(filmeMaiorQueCincoLetras(["O Rei Leão", "Naruto", "Avengers", "Star Wars"]));  // "Avengers"

function filmeMaiorQueCincoLetras(filmes) {
    for (let filme of filmes) {
        if (filme.length > 5) {
            return filme
        }
    }
    return "Nenhum filme encontrado"
}
const filmes = ["BladeRunner 2049", "Lalaland", "Clube da Luta", "Velozes e Furiosos"]
const resultado3 = filmeMaiorQueCincoLetras(filmes)
console.log(resultado3)

// 4. Crie uma função que receba um array de nomes de personagens de *Hunter x Hunter* com os personagens "Gon Freecss", "Killua Zoldyck", "Leorio Paradinight" e um array de números representando a força de cada personagem, respectivamente 180, 195, 140. A função deve retornar um terceiro array com o nome dos personagens cuja força seja superior a 150, utilizando um laço `for`.
// Exemplo de chamada:
//const nomes = ["Gon Freecss", "Killua Zoldyck", "Leorio Paradinight"];
//const forcas = [80, 95, 40];
//console.log(personagemComForcaSuperiorA100(nomes, forcas));  

function personagemComForcaSuperiorA100(nomes, forcas) {
    let personagensFortes = []
    for (let i = 0; i < nomes.length; i++) {
        if (forcas[i] > 100) {
            personagensFortes.push(nomes[i])
        }
    }
    return personagensFortes
}
const nomes = ["Gon Freecss", "Killua Zoldyck", "Leorio Paradinight"]
const forcas = [180, 195, 140]
console.log(personagemComForcaSuperiorA100(nomes, forcas))


// 5. Crie uma função que receba um array de números e retorne a quantidade de números negativos presentes no array, usando um laço `while`.
// Exemplo de chamada:
// console.log(contarNegativos([3, -2, -5, 7, 0, -1]));  // 3

function contarNegativos(arr) {
    let contador = 0
    let i = 0

    while (i < arr.length) {
        if (arr[i] < 0) {
            contador++
        }
        i++
    }
    return contador
}
console.log(contarNegativos([-6, -2, -1, 7, 2, -10]))


// 6. Crie uma função que receba uma string, converta-a para um array e retorne a quantidade de vezes que a letra "a" aparece nela.
// Exemplo de chamada:
// console.log(contarLetraA("Naruto é um anime top!"));  // 4

function contarLetraA(str) {
    let arr = str.split('')
    let contador = 0
    for (let char of arr) {
        if (char.toLowerCase() === 'a') {
            contador++
        }
    }
    return contador
}
console.log(contarLetraA("Darlan é um absurdo ta lk"))

// 7. Crie uma função que percorra um array de filmes e retorne um novo array com os filmes que têm o nome começando com a letra "S" usando o laço `for...of`.
// Exemplo de chamada:
// console.log(filmesComLetraS(["Star Wars", "Superman", "Shrek", "Batman"]));  // ["Star Wars", "Superman", "Shrek"]

function filmesComLetraS(filmes) {
    let filmesComS = []
    for (let filme of filmes) {
        if (filme[0].toUpperCase() === 'S') {
            filmesComS.push(filme)
        }
    }
    return filmesComS
}
console.log(filmesComLetraS(["Shrek 3", "Shrek 2", "Shrek", "Batman"]))

// 8. Crie uma função que receba um array de strings e retorne a maior substring (palavra) encontrada no array.
// Exemplo de chamada:
// console.log(maiorSubstring(["João", "Maria", "Alexandre", "Carlos"]));  // "Alexandre"

function maiorSubstring(arr) {
    let maiorPalavra = ''; 

    for (let palavra of arr) {
        if (palavra.length > maiorPalavra.length) {
            maiorPalavra = palavra;  
        }
    }

    return maiorPalavra;  
}


console.log(maiorSubstring(["João", "Maria", "Alexandre", "Carlos"]));  


// 9. Crie uma função que calcule o fatorial de um número utilizando um laço `for`.
// Exemplo de chamada:
// console.log(fatorial(5));  // 120 (5 * 4 * 3 * 2 * 1)

function fatorial(n) {
    let resultado = 1;  
   
    for (let i = 1; i <= n; i++) {
        resultado *= i;  
    }

    return resultado;  
}


console.log(fatorial(5));  

// 10. Crie uma função que receba um número e retorne uma string que contém esse número repetido, separado por vírgulas, utilizando um laço `while`.
// Exemplo de chamada:
// console.log(repetirNumero(7, 4));  // "7, 7, 7, 7"

function repetirNumero(numero, repeticoes) {
    let resultado = ''
    let i = 0
    while (i < repeticoes) {
        if (i > 0) {
            resultado += ', '
        }
        resultado += numero
        i++
    }
    return resultado
}

console.log(repetirNumero(7, 5))