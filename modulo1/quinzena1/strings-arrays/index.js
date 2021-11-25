/* Exercícios de interpretação
1- 
a. undefined, pois não foi atribuido valor à array.
b. null, pois foi atribuído null à array.
c. 11, pois existem 11 termos na array.
d. 3, pois retorna o item de índice "0" na array.
e. [3 , 19, 5, 6, 7, 8, 9, 10, 11, 12, 13], pois o item i + 1 (que é o de índice 1), foi substituído pelo número 19.
f. 9, pois retorna o item de índice 6 na array.

2-
Frase inicial: Subi num ônibus em Marrocos
Após o toUpperCase( ): SUBI NUM ÔNIBUS EM MARROCOS
Após o replaceAll("A", "I"): SUBI NUM ÔNIBUS EM MIRROCOS
*/

// Exercícios de escrita de código
/*
// 1-
const nomeDoUsuario = prompt ("Digite seu nome de usuário.")
const emailDoUsuario = prompt ("Digite seu email.")
console.log (`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeDoUsuario}!`)
*/

/*
// 2
let array = ["Tropeiro", "Frango com quiabo", "Churrasco", "Hamburguer", "Pizza"]
console.log (array)
console.log (`Essas são minhas comidas preferidas: ${array.join('\n')}`)
let comidaUsuario = prompt ("Digite sua comida preferida.")
let novaArray = array
novaArray [1] = comidaUsuario
console.log (novaArray)
*/

/*
// 3
let listaDeTarefas = []
let i = 0

listaDeTarefas [i] = prompt ("Cite a primeira tarefa do dia")
listaDeTarefas [i + 1] = prompt ("Cite a segunda tarefa do dia")
listaDeTarefas [i + 2] = prompt ("Cite a terceira tarefa do dia")

console.log (listaDeTarefas)

let tarefaRealizada = Number(prompt ("Digite o índice de uma tarefa já realizada."))
listaDeTarefas.splice(tarefaRealizada, 1)
console.log (listaDeTarefas)
*/

// Desafio
/*
// 1. 
let frase = prompt("Digite uma frase qualquer")
let espaco = " "
let array = frase.split(espaco)
console.log (array)
*/

// 2. 
let array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log (`O índice do abacaxi é ${array.indexOf("Abacaxi")} e o tamanho da array é ${array.length}`)