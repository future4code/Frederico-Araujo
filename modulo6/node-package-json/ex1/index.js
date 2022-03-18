//Exercício 1

// A forma de receber acessar parâmetros na linha de comando é o process.argv

const nome = process.argv[2]
const idade = Number(process.argv[3])

const saudacao = `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`

console.log(saudacao);