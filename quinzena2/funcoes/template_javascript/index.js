/* Exercícios de interpretação de código
1. a) No primeiro console, será impresso 10 (que é 5 * 2).
No segundo, será impresso 50 (que é 5 * 10)
b) Se retirar os dois console.log, não apareceria nada no console, pois não foi feito um comando para realizar essa ação.

2. a) A função criada tem a finaldade de receber um texto, torná-lo escrito em letras minúsculas, e verificar se existe a palavra "cenoura" no texto.
b) i. true
ii. true 
iii. true
*/

// Exercícios de escrita de código

// 1. a)
/*
function sobreMim() {
const informacoes = "Eu sou Fred, tenho 26 anos, moro em Belo Horizonte e sou Engenheiro"
return console.log (informacoes)
}
sobreMim()
*/

// 1. b)
/*
function sobreMim(nome, idade, endereco, profissao) {
    nome = "Frederico"
    idade = 26
    endereco = "Belo Horizonte"
    profissao = "Engenheiro"

    return console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`)
}
sobreMim()

Ou

function sobreMim(nome, idade, endereco, profissao) {
      return console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`)
}
sobreMim("Frederico", 26, "Belo Horizonte", "Engenheiro")
*/

// 2. a)
/*
function somatoria(numero1, numero2){
    numero1 = Number(prompt("Insira o primeiro número número:"))
    numero2 = Number(prompt("Insira o segundo número número:"))
    soma = numero1 + numero2
    return console.log(soma)
}
somatoria()
*/

// 2. b)
/*
function comparaNumeros(numero1, numero2){
    numero1 = Number(prompt("Insira o primeiro número número:"))
    numero2 = Number(prompt("Insira o segundo número número:"))
    let maiorOuIgual = numero1>=numero2
    return console.log(maiorOuIgual)
}
comparaNumeros()
*/

// 2. c)
/*
function parOuImpar(numero){
    numero = Number(prompt("Insira o número"))
    let par = numero % 2 == 0
    return console.log(par)
}
parOuImpar()
*/

// 2. d)
/*
function mensagem (texto) {
    const tamanho = texto.length
    const maiusculo = texto.toUpperCase()
    return console.log(tamanho, maiusculo)
}
mensagem("Eu estudo na Labenu")
*/

// 3.
/*
function soma(numero1, numero2) {
    const soma = numero1 + numero2
    return console.log(`A soma dos números é ${soma}`)
}

function subtracao(numero1, numero2) {
    const subtracao = numero1 - numero2
    return console.log(`A subtração dos números é ${subtracao}`)
}

function multiplicacao(numero1, numero2) {
    const multiplicacao = numero1 * numero2
    return console.log(`A multiplicação dos números é ${multiplicacao}`)
}

function divisao(numero1, numero2) {
    const divisao = numero1 / numero2
    return console.log(`A divisão dos números é ${divisao}`)
}

let numero1 = Number(prompt("Digite um número"))
let numero2 = Number(prompt("Digite outro número"))

soma(numero1, numero2)
subtracao(numero1, numero2)
multiplicacao(numero1, numero2)
divisao(numero1, numero2)
*/

//Desafios
// 1.
/*
let arrowFunction1 = (parametroArrow1) => {
return parametroArrow1
}

let arrowFunction2 = (parametro1Arrow2, parametro2Arrow2) => {
    parametro1Arrow2 = Number(prompt("Digite um número"))
    parametro2Arrow2 = Number(prompt("Digite outro número"))
   console.log(parametro1Arrow2 + parametro2Arrow2)
}

arrowFunction1(arrowFunction2())
*/

// 2.
/*
function pitagoras(hipotenusa,cateto1,cateto2){
cateto1 = Number(prompt("Digite o valor de um cateto"))
cateto2 = Number(prompt("Digite o valor do outro cateto"))
hipotenusa = ((cateto1 ** 2) + (cateto2 ** 2)) ** (1/2)
return hipotenusa
}

console.log(pitagoras())
*/