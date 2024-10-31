
   // 1. Par ou Ímpar
// Crie uma função chamada `parOuImpar` que recebe um número (tipo: Number).
// Utilize o operador de mod (%) e uma estrutura condicional `if` para retornar "Par" ou "Ímpar".
function parOuImpar(numero){
    if (numero % 2 === 0){
       return 'par'
    } else{
       return "ímpar"
    }
   }
   console.log(parOuImpar(24));

// 2. Maior de Três
// Crie uma função chamada `maiorDeTres` que recebe três números (tipo: Number).
// Crie uma lógica de programação para retornar o maior número.

function maiorDeTres( num1 , num2 , num3){
    let maior = num1;

    if(num2 > maior){
        maior = num2;
    }
    if(num3 > maior){
        maior = num3;
    }
    return maior;
}
console.log(maiorDeTres(3 , 7 , 11));

// 3. Verificação de Idade
// Crie uma função chamada `verificaIdade` que recebe a idade (tipo: Number).
// Utilize uma estrutura condicional `if` para retornar "Menor de idade" ou "Maior de idade".

function verificaIdade(idade){
    if(idade < 18){
        return 'Menor de idade'
    }
    else{
        return 'Maior de idade'
    }
}
console.log(verificaIdade(20));

// 4. Classificação de Notas
// Crie uma função chamada `classificaNota` que recebe uma nota (tipo: Number).
// Utilize `if`, `else if` e `else` para retornar "Aprovado", "Recuperação" ou "Reprovado".

function classificaNota(nota){
    if(nota >= 7){
        return 'Aprovado'
    }else if(nota <= 4){
        return 'Recuperação'
    } else{
        return 'Reprovado'
    }
}
console.log(classificaNota(8));

// 5. Dia da Semana
// Crie uma função chamada `diaDaSemana` que recebe um número (tipo: Number) de 1 a 7.
// Utilize uma estrutura `switch` para retornar o nome do dia da semana correspondente.

function diaDaSemana (dia){

    switch(dia){
        case 1:
            return 'Domingo'
            break
        case 2:
            return 'Segunda-Feira'
            break
        case 3:
            return 'Terça-Feira'
            break
        case 4:
            return 'Quarta-Feira'
            break
        case 5:
            return'Quinta-Feira'
            break
        case 6:
            return 'Sexta-Feira'
            break

            default:
                return 'Sabado'
                break
    }

}
console.log(diaDaSemana(3));

// 6. Classificação de Animal
// Crie uma função chamada `classificaAnimal` que recebe uma string representando um animal dentre os seguintes: cachorro, gato, passarinho, salmão, lagarto.
// Utilize uma estrutura `switch` para retornar se é "Mamífero", "Ave", "Anfíbio", "Peixe".

function classificaAnimal(animal) {
    switch (animal){
        case 'cachorro':
            return "Mamífero"
        case 'gato':
            return "Mamífero";
        case 'passarinho':
            return "Ave";
        case 'salmão':
            return "Peixe";
        case 'lagarto':
            return "Anfíbio";
        default:
            return "Animal desconhecido";
    }
}

console.log(classificaAnimal('salmão'));


// 7. Calculadora Simples
// Crie uma função chamada `calculadora` que recebe dois números e uma string representando uma operação (soma, subtração, multiplicação, divisão).
// Utilize uma estrutura `switch` para retornar o resultado da operação.

function calculadora( num3 , num4 , operação){
    switch(operação){
        case 'soma':
            return num3 + num4;
        case 'subtração':
            return num3 - num4;
        case 'multiplicação':
            return num3 * num4;
        case 'divisão':
            return num3 / num4;
        default:
            return 'operação invalida';
    }
}
console.log(calculadora(10 , 5 , 'multiplicação'))

// 8. Par ou Ímpar em uma Lista
// Crie uma função chamada `listaParOuImpar` que recebe um array de números.
// Utilize o método `map()` e uma estrutura condicional `if` para retornar uma nova lista com "Par" ou "Ímpar" para cada número.
function listaParOuImpar(numeros) {
    return numeros.map(numero => (numero % 2 === 0 ? "Par" : "Ímpar"));
}

// 9. Mensagem de Boas-Vindas
// Crie uma função chamada `mensagemBoasVindas` que recebe um nome (tipo: String) e um horário (tipo: Number).
// Utilize uma estrutura condicional `if`, `else if` e `else` para retornar uma mensagem apropriada: "Bom dia", "Boa tarde" ou "Boa noite".

function mensagemBoasVindas(nome, horario) {
    let mensagem;

    if (horario >= 0 && horario < 12) {
        mensagem = 'Bom dia';
    } else if (horario >= 12 && horario < 18) {
        mensagem = 'Boa tarde';
    } else if (horario >= 18 && horario < 24) {
        mensagem = 'Boa noite';
    } else {
        return 'Horário inválido!';
    }

    return `${mensagem}, ${nome}!`;
}

console.log(mensagemBoasVindas('Gustavo', 20));

// 10. Classificação de Filmes
// Crie uma função chamada `classificaFilme` que recebe uma nota (tipo: Number) de um filme.
// Utilize uma estrutura condicional `if`, `else if` e `else` para retornar "Excelente" (nota 8 ou mais), 
// "Bom" (nota de 5 a 7) ou "Ruim" (nota abaixo de 5).
function classificaFilme(nome, nota){
    if(nota >= 8){
        console.log(`${nome} recebeu nota ${nota} e eh Excelente!`)
    } else if( nota < 8 && nota >= 5){
        console.log(`${nome} recebeu nota ${nota} e eh bom`)
    }else {
        console.log(`${nome} recebeu nota ${nota} e eh uma merda`)
    }
}
classificaFilme('Lalaland', 10)
classificaFilme('Velozes e Furiosos', 10)
classificaFilme('Clube da Luta', 10)
classificaFilme('Bladerunner 2047', 10)
