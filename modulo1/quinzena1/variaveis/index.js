// Exercício 1
let nome
let idade
console.log(typeof nome)
console.log(typeof idade)
/* Foi impresso o tipo "undefined", pois não foram atribuídos valores para as variáveis.
OBS: Não é possível declarar uma variável const sem atribuir valor. */
nome = prompt("Digite seu nome")
idade = prompt("Digite sua idade")
console.log(typeof nome)
console.log(typeof idade)
/* Agora foram atribuídas duas strings às variáveis, que antes estavam indefinidas*/
console.log("Olá,",nome,", você tem",idade,"anos")

//Exercício 2
let viagemNoFeriado
let familia
let praia
viagemNoFeriado = prompt("Você viajou no feriado?")
familia = prompt("Suas viagens preferidas são com a sua família?")
praia = prompt("Seu lugar favorito para viajar é a praia?")
console.log("Você viajou no feriado? -", viagemNoFeriado)
console.log("Suas viagens preferidas são com a sua família? -", familia)
console.log("Seu lugar favorito para viajar é a praia? -", praia)

//Exercício 3
let a = 10
let b = 25
let c
c = a
a = b
b = c
console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

//Desafio
let num1String
let num2String

num1String = prompt("Digite o primeiro valor")
num2String = prompt("Digite o segundo valor")
let num1 = Number(num1String)
let num2 = Number(num2String)
console.log("A soma dos valores é", num1+num2,)
console.log("O produto dos valores é", num1*num2)

//OBS: O js consegue multiplicar strings, mas na soma ele concatena. Ex: Se eu fizesse console.log(num1String+num2String), com num1String = 10 e num2String = 10, o resultado impresso seria 1010, não 20.