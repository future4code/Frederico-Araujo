/* Exercícios de interpretação
1. O resultado impresso será 10, que é a soma de 1, 2, 3 e 4.
2. a) Serão impressos todos os números presentes na array "lista" que são maiores que 18.
b)
3. *
    **
    ***
    ****
*/

// Exercícios de escrita
//1.
// let bichinhosDeEstimacao = Number(prompt("Quantos bichinhos de estimação você tem?"))
// let nomes = []
// if (bichinhosDeEstimacao === 0) {
//     console.log("Que pena! Você pode adotar um pet!")
// } else if (bichinhosDeEstimacao > 0) {
//      for(let i=0; i < bichinhosDeEstimacao; i ++) {
//         nomes[i] = prompt("Digite o(s) nome(s) do(s) seu(s) pet(s):")
//         }
//     console.log(nomes)
// }

//2.
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
//a)
// for(let i = 0; i < arrayOriginal.length; i++)
// console.log(arrayOriginal[i])
//b)
// for(let i = 0; i < arrayOriginal.length; i++)
// console.log(arrayOriginal[i]/10)
//c)
// let novoArray = []
// for(let i = 0 ; i < arrayOriginal.length ; i++) {
//         if (arrayOriginal[i] % 2 === 0) {
//             let confere = arrayOriginal[i]
//             novoArray.push(confere) 
//         }
//     }
// console.log(novoArray)
//d)
// let novoArray = []
// for(i = 0 ; i < arrayOriginal.length ; i++) {
//     let confere = `O elemento de index ${arrayOriginal.indexOf(arrayOriginal[i])} é: ${arrayOriginal[i]}`
//     novoArray[i] = confere
//     }
//     console.log(novoArray)
//e)
// let i = 0
// let maiorNumero = 0
// let menorNumero = arrayOriginal[i]

// for(i = 0 ; i < arrayOriginal.length ; i++ ){
//     if (arrayOriginal[i] > maiorNumero){
//         maiorNumero = arrayOriginal[i]
//     }
//     if (arrayOriginal[i] < menorNumero){
//         menorNumero = arrayOriginal[i]
//     }
// }

// console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}.`)

//Desafios
//1.
// let numeroSecreto = Number(prompt("Digite o número secreto."))
// let numeroInserido
// console.log("Vamos jogar!")

// for(i = 0 ; numeroInserido !== numeroSecreto; i++){
//     numeroInserido = Number(prompt("Tente acertar o número secreto!"))
//     if(numeroInserido > numeroSecreto){
//         console.log(`O número chutado foi: ${numeroInserido}`)
//         console.log("Errou. O número secreto é menor!")
//     } else if (numeroInserido < numeroSecreto){
//         console.log(`O número chutado foi: ${numeroInserido}`)
//         console.log("Errou. O número secreto é maior!")
//     }  else if(numeroInserido === numeroSecreto){
//         console.log("Acertou!!")
//         console.log(`O número de tentativas foi: ${i + 1}`)
//     }
// }
//2. 
let numeroSecreto = Math.floor((Math.random() * 100) + 1);
let numeroInserido
console.log("Vamos jogar!")

for(i = 0 ; numeroInserido !== numeroSecreto; i++){
    numeroInserido = Number(prompt("Tente acertar o número secreto!"))
    if(numeroInserido > numeroSecreto){
        console.log(`O número chutado foi: ${numeroInserido}`)
        console.log("Errou. O número secreto é menor!")
    } else if (numeroInserido < numeroSecreto){
        console.log(`O número chutado foi: ${numeroInserido}`)
        console.log("Errou. O número secreto é maior!")
    }  else if(numeroInserido === numeroSecreto){
        console.log("Acertou!!")
        console.log(`O número de tentativas foi: ${i + 1}`)
    }
 }

 // A alteração foi fácil de fazer, pois existe uma função que sorteia os números, então a única alteração foi inserir essa função para retornar o número secreto.