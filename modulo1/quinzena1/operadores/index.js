/* Exercícios de interpretação de código
1. 
a) O resultado impresso será false, pois a const bool2 é false.
b) O resultado impresso será false, pois a const bool2 é false.
c) O resultado impresso será true, pois !resultado é true e (bool1 || bool2) também.
d) Será impresso "boolean", pois é o tipo da variável resultado (true or false).

2. Será impresso o primeiro número concatenado com o segundo número, pois o colega fez a soma de strings. Para solucionar esse problema, ele deve converter a string em number.

3. Conforme dito na questão 2, ele deve converter a string em number. 
Uma forma de fazer isso é substituindo:

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

Por:

let primeiroNumero = Number (prompt("Digite um numero!"))
let segundoNumero = Number (prompt("Digite outro numero!"))
*/
// Exercícios de escrita de código:
// 1. 
/* 
let idadeDoUsuario = Number (prompt("Digite sua idade!"))
let idadeDoAmigo = Number (prompt("Digite a idade do seu/sua melhor amigo(a)!"))

console.log ("Sua idade é maior que a do seu amigo?", idadeDoUsuario > idadeDoAmigo)
console.log ("A diferença de idade entre vocês é de", idadeDoUsuario - idadeDoAmigo, "anos")
*/
// 2.
/*
let numeroPar = Number (prompt("Digite um número par!"))
console.log (numeroPar % 2)
// O resto da divisão de um número par por 2 será sempre 0.
// Se o indivíduo inserir um número ímpar, o resto será sempre 1.
*/
// 3.
/*
let idade = Number (prompt("Digite a sua idade!"))
console.log ("A sua idade equivale à", idade * 12 ,"meses")
console.log ("A sua idade equivale à", idade * 365, "dias")
console.log ("A sua idade equivale à", idade * 365 * 24 ,"horas")
*/
// 4.
/*
let primeiroNumero = Number (prompt ("Digite um número"))
let segundoNumero = Number (prompt ("Digite outro número"))
console.log ("O primeiro número é maior que o segundo?", primeiroNumero > segundoNumero)
console.log ("O primeiro número é igual ao segundo?", primeiroNumero === segundoNumero)
console.log ("O primeiro número é divisível pelo segundo?", (primeiroNumero % segundoNumero) === 0)
console.log ("O segundo número é divisível pelo primeiro?", (segundoNumero % primeiroNumero) === 0)
*/

// Desafios
// 1.
/*
// a)
console.log ("77 °F é igual a", (77-32)*(5/9)+273.15 , "K")
// b)
console.log ("80 °C é igual a", (80)*(9/5)+32 , "°F")
// c)
console.log ("30 °C é igual a", (((30)*(9/5)+32)-32)*(5/9)+273.15, "K e a", (30)*(9/5)+32, "°F")
// d)
let grauCelsius = Number(prompt("Digite a temperatura em °C"))
console.log ("30 °C é igual a", (((grauCelsius)*(9/5)+32)-32)*(5/9)+273.15, "K e a", (grauCelsius)*(9/5)+32, "°F")
*/

// 2
/*
// a)
let consumo = 280
console.log ("O valor a ser pago é R$", consumo * 0.05)
// b)
let desconto = 15
console.log ("O valor a ser pago com desconto é R$", (consumo * 0.05)*(1-(desconto/100)))
*/

//3.
/*
// a)
console.log ("20 lb equivalem a", 20 * 0.453592, "kg") //9,07185
// b)
console.log ("15,5 oz equivalem a", 15.5 * 0.0283495, "kg") //0,4394176
// c)
console.log ("100 mi equivalem a", 100 * 1609.34, "m")  //160.934
// d)
console.log ("50 ft equivalem a", 50 * 0.3048, "m") //15,24
// e)
console.log ("103,56 gal equivalem a", 103.56 * 3.78541 , "L") //392,017244
// f)
console.log ("450 xic equivalem a", 450 * 0.24, "L") //108
// g)
let milhas = Number(prompt("Digite o valor em milhas"))
console.log ("O valor digitado em milhas equivale a", milhas * 1609.34, "m")
*/