const ask = require('readline-sync')

let calculadora = true // declarando a variavel calculadora como verdadeira

while (calculadora) {  // laço com as primeiras opções
    console.clear() // limpa o console
    console.log(`
    [1] - Calcular
    [0] - sair
    `)

    let opcoes = Number(ask.question("Escolha uma opcao:")) // variavel da pergunta como Number pra transformar de string para numerica

    console.clear
    console.clear
    switch (opcoes) { // switch para a variavel "opcoes" 
        case 1:
            console.log(`Entrando na Calculadora`)
            console.clear()
            ask.question("tecle ENTER para continuar")
            console.clear()
            let num1 = Number(ask.question("Digite um numero:"))  // variavel de pergunta numerica para escolher o primeiro número
            let num2 = Number(ask.question("Digite outro numero:")) // segunda pergunta para escolher o segundo número

            console.log(num1, num2)

            console.log(`
    [2] - Soma
    [3] - Subtração
    [4] - Multiplicação
    [5] - Divisão
    [6] - MOD
    `)
            let operaçoes = Number(ask.question("Escolha uma Operacao:")) // pergunta pra escolher uma operação, também tem o "Number" pra transformar em valor numerico
            console.clear()
            switch (operaçoes) { // switch para cada tipo de operação com os dois numeros escolhidos anteriormente
                case 2:
                    console.log(` ${num1} + ${num2}`)
                    console.log(Soma(num1, num2))
                    break
                case 3:
                    console.log(` ${num1} - ${num2}`)
                    console.log(Subtração(num1, num2))
                    break
                case 4:
                    console.log(` ${num1} * ${num2}`)
                    console.log(Multiplicação(num1, num2))
                    break
                case 5:
                    console.log(` ${num1} / ${num2}`)
                    console.log(Divisão(num1, num2))
                    break
                case 6:
                    console.log(` ${num1} % ${num2}`)
                    console.log(MOD(num1, num2))
                    break
            }
            ask.question("tecle ENTER para continuar")
            console.clear()
            break
        case 0:
            calculadora = false
            break

    }
}
function Soma(num1, num2) { // função da soma
    return num1 + num2
}

function Subtração(num1, num2) { // função da subtração
    return num1 - num2
}

function Multiplicação(num1, num2) { // função da multiplicação
    return num1 * num2
}
function Divisão(num1, num2) { // função da divisão
    return num1 / num2
}

function MOD(num1, num2) { // função de porcentagem
    return num1 % num2
}
