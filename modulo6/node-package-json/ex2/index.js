// Exercício 2

const operacao = process.argv[2]

const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

if (operacao === 'add') {
    console.log('Resposta: ' + (num1 + num2));
} else if (operacao === 'sub') {
    console.log('Resposta: ' + (num1 - num2));
} else if (operacao === 'mult') {
    console.log('Resposta: ' + (num1 * num2));
} else if (operacao === 'div') {
    console.log('Resposta: ' + (num1 / num2));
} 