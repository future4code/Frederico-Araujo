// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
 let altura = Number (prompt ("Digite a altura do retângulo"))
 let largura = Number (prompt ("Digite a largura do retângulo"))
 console.log (altura * largura)
}

// Exercício 2
function imprimeIdade() {
let anoAtual = Number (prompt ("Em que ano estamos?"))
let anoNascimento = Number (prompt ("Em que ano você nasceu?"))
console.log (anoAtual - anoNascimento)
}

// Exercício 3
function calculaIMC() {
  let peso = Number (prompt ("Qual seu peso?"))
  let altura = Number (prompt ("Qual sua altura?"))
  console.log (peso / (altura * altura))
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const nome = prompt ("Qual o seu nome?")
  let idade = Number (prompt ("Qual a sua idade?"))
  let email = prompt ("Qual o seu email?")
  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  let cor1 = prompt ("Qual sua cor favorita?")
  let cor2 = prompt ("Qual sua segunda cor favorita?")
  let cor3 = prompt ("Qual sua terceira cor favorita?")
  let array = [cor1, cor2, cor3]
  console.log (array)
  }

// Exercício 6
function retornaStringEmMaiuscula() {
  let frase = prompt ("Digite alguma coisa.")
  console.log (frase.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  let custo = Number (prompt ("Digite o custo do espetáculo."))
  let valor = Number (prompt ("Digite o valor do ingresso."))
console.log (custo / valor)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  let string1 = prompt ("Digite uma palavra.")
  let string2 = prompt ("Digite outra palavra.")
console.log(string1.length === string2.length)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  let string1 = prompt ("Digite uma palavra.")
  let string2 = prompt ("Digite outra palavra.")
  console.log (string1.toLowerCase() === string2.toLowerCase())
}

// Exercício 10
function checaRenovacaoRG() {
 let anoAtual = Number (prompt ("Em que ano estamos?"))
 let anoNascimento = Number (prompt ("Em que ano você nasceu?"))
 let anoIdentidade = Number (prompt ("Em que ano seu RG foi emitido?"))
const idade = anoAtual - anoNascimento
const validade = anoAtual - anoIdentidade

console.log (idade <= 20 && validade >= 5 || idade > 20 && idade <= 50 && validade >= 10 || idade > 50 && validade >= 15)
}
// Exercício 11
function checaAnoBissexto() {
let ano = Number (prompt ("Digite um ano."))
let multiplo400 = (ano % 400 === 0)
let multiplo4 = (ano % 4 === 0)
let multiplo100 = (ano % 100 === 0)
console.log(multiplo400 || multiplo4 && !(multiplo100 !== multiplo400))
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  const idade = (prompt ("Você tem mais de 18 anos?"))
  const ensinoMedio = (prompt ("Você possui ensino médio completo?"))
  const disponibilidade = (prompt ("Você possui disponibilidade exclusiva durante os horários do curso?"))
console.log(idade == "sim" && ensinoMedio == "sim" && disponibilidade == "sim")
}