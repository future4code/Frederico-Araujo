/* Exercícios de interpretação
1.
a) O código verifica se o número inserido pelo usuário é divisível por 2 e retorna "Passou no teste" se for divisível ou "Não passou no teste" se não for.
b) Ele somente imprime "Passou no teste" se o número for divisível por 2.
c) Ele imprime "Não passou no teste" se o número não for divisível por 2.

2. 
a) O código serve para retornar o valor da fruta de acordo com o seu nome.
b) A mensagem impressa será: "O preço da fruta Maçã é R$ 2.25"
c) Como não houve o break, a variavel preço recebe o valor final, que é de 5. Dessa forma, a mensagem impressa seria: "O preço da fruta Pêra é R$ 5"

3. 
a) A primeira linha está pedindo para o usuário escrever um número. Como por padrão o prompt recebe uma string, na primeira linha o valor inserido está sendo convertido em um número.
b) No caso do número 10, será impressa a mensagem: "Esse número passou no teste". Se o número for -10, haverá erro.
c) Para o número -10 haverá erro, pois a mensagem está declarada dentro da condicional (escopo local) e o console.log está no escopo global.
*/
// Exercícios de escrita de código
// 1.
/*
let idadeDoUsuario = Number(prompt("Digite a sua idade:"))

if (idadeDoUsuario >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}
*/

// 2.
/*
let turno = prompt("Em qual turno você estuda? Digite 'M' para Matutino, 'V' para Vespertino ou 'N' para Noturno")

if (turno === "M"){
    console.log("Bom dia!")
} else if (turno === "V") {
    console.log("Boa tarde!")
} else if (turno === "N") {
    console.log("Boa noite!")
} else {
    console.log("Digite o turno conforme pedido no prompt")
}
*/

// 3.
/*
let turno = prompt("Em qual turno você estuda? Digite 'M' para Matutino, 'V' para Vespertino ou 'N' para Noturno")
switch(turno) {
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
    default:
        console.log("Digite o turno conforme pedido no prompt")
}
*/

// 4.
/*
const vaiAssistirOuNao = (genero, preco) => {
    genero = prompt("Digite o gênero do filme.")
    preco = Number(prompt("Digite o valor do ingresso."))
    
    if (genero.toLowerCase() === "fantasia" && preco < 15){
        console.log("Bom filme!")
    } else {
        console.log("Escolha outro filme :(")
    }
}
vaiAssistirOuNao()
*/

// Desafios

// 1.
/*
const vaiAssistirOuNao = (genero, preco) => {
    genero = prompt("Digite o gênero do filme.")
    preco = Number(prompt("Digite o valor do ingresso."))
    
    if (genero.toLowerCase() === "fantasia" && preco < 15){
        let lanche = prompt("Qual lanche você vai comprar?")
        console.log("Bom filme!")
        console.log(`Aproveite o seu ${lanche}`)
    } else {
        console.log("Escolha outro filme :(")
    }
}
vaiAssistirOuNao()
*/

// 2.

const nomeCompleto = prompt("Digite seu nome completo.")
const tipoDeJogo = prompt("Digite 'IN' para jogos internacionais ou 'DO' para jogos domésticos.")
const etapaDoJogo = prompt("Digite 'SF' para Semi-final, 'DT' para decisão de terceiro lugar ou 'FI' para final.")
const categoria = Number(prompt("Digite a categoria 1, 2, 3 ou 4 do ingresso."))
const quantidade = Number(prompt("Digite a quantidade de ingressos."))

if (tipoDeJogo === "IN"){
    if (etapaDoJogo === "SF"){
        if (categoria === 1) {
            let preco = 1320
            console.log("--- Dados da compra ---")
            console.log("Nome do cliente:", nomeCompleto)
            console.log("Tipo de jogo: Internacional")
            console.log("Etapa do  jogo: Semi-final")
            console.log("Categoria:", categoria)
            console.log("Quantidade de ingressos:", quantidade)
            console.log("--- Valores ---")
            console.log("Valor do ingresso: U$", preco * 4.1)
            console.log("Valor total: U$", preco * 4.1 * quantidade)            
        } else if (categoria === 2){
            let preco = 880
            console.log("--- Dados da compra ---")
            console.log("Nome do cliente:", nomeCompleto)
            console.log("Tipo de jogo: Internacional")
            console.log("Etapa do  jogo: Semi-final")
            console.log("Categoria:", categoria)
            console.log("Quantidade de ingressos:", quantidade)
            console.log("--- Valores ---")
            console.log("Valor do ingresso: U$", preco * 4.1)
            console.log("Valor total: U$", preco * 4.1 * quantidade)          
        } else if (categoria === 3){
            let preco = 550
            console.log("--- Dados da compra ---")
            console.log("Nome do cliente:", nomeCompleto)
            console.log("Tipo de jogo: Internacional")
            console.log("Etapa do  jogo: Semi-final")
            console.log("Categoria:", categoria)
            console.log("Quantidade de ingressos:", quantidade)
            console.log("--- Valores ---")
            console.log("Valor do ingresso: U$", preco * 4.1)
            console.log("Valor total: U$", preco * 4.1 * quantidade)          
        } else if (categoria === 4){
            let preco = 220
            console.log("--- Dados da compra ---")
            console.log("Nome do cliente:", nomeCompleto)
            console.log("Tipo de jogo: Internacional")
            console.log("Etapa do  jogo: Semi-final")
            console.log("Categoria:", categoria)
            console.log("Quantidade de ingressos:", quantidade)
            console.log("--- Valores ---")
            console.log("Valor do ingresso: U$", preco * 4.1)
            console.log("Valor total: U$", preco * 4.1 * quantidade)          
        } else{
            console.log("Digite uma categoria correta.")
        }
    } else if (etapaDoJogo === "DT"){
        if (categoria === 1) {
            let preco = 660
            console.log("--- Dados da compra ---")
            console.log("Nome do cliente:", nomeCompleto)
            console.log("Tipo de jogo: Internacional")
            console.log("Etapa do  jogo: Disputa de terceiro lugar")
            console.log("Categoria:", categoria)
            console.log("Quantidade de ingressos:", quantidade)
            console.log("--- Valores ---")
            console.log("Valor do ingresso: U$", preco * 4.1)
            console.log("Valor total: U$", preco * 4.1 * quantidade)            
        } else if (categoria === 2){
            let preco = 440
            console.log("--- Dados da compra ---")
            console.log("Nome do cliente:", nomeCompleto)
            console.log("Tipo de jogo: Internacional")
            console.log("Etapa do  jogo: Disputa de terceiro lugar")
            console.log("Categoria:", categoria)
            console.log("Quantidade de ingressos:", quantidade)
            console.log("--- Valores ---")
            console.log("Valor do ingresso: U$", preco * 4.1)
            console.log("Valor total: U$", preco * 4.1 * quantidade)          
        } else if (categoria === 3){
            let preco = 330
            console.log("--- Dados da compra ---")
            console.log("Nome do cliente:", nomeCompleto)
            console.log("Tipo de jogo: Internacional")
            console.log("Etapa do  jogo: Disputa de terceiro lugar")
            console.log("Categoria:", categoria)
            console.log("Quantidade de ingressos:", quantidade)
            console.log("--- Valores ---")
            console.log("Valor do ingresso: U$", preco * 4.1)
            console.log("Valor total: U$", preco * 4.1 * quantidade)    
        } else if (categoria === 4){
            let preco = 170
            console.log("--- Dados da compra ---")
            console.log("Nome do cliente:", nomeCompleto)
            console.log("Tipo de jogo: Internacional")
            console.log("Etapa do  jogo: Disputa de terceiro lugar")
            console.log("Categoria:", categoria)
            console.log("Quantidade de ingressos:", quantidade)
            console.log("--- Valores ---")
            console.log("Valor do ingresso: U$", preco * 4.1)
            console.log("Valor total: U$", preco * 4.1 * quantidade)    
        } else{
            console.log("Digite uma categoria correta.")
        }
    } else if (etapaDoJogo === "FI"){
        if (categoria === 1) {
            let preco = 1980
            console.log("--- Dados da compra ---")
            console.log("Nome do cliente:", nomeCompleto)
            console.log("Tipo de jogo: Internacional")
            console.log("Etapa do  jogo: Final")
            console.log("Categoria:", categoria)
            console.log("Quantidade de ingressos:", quantidade)
            console.log("--- Valores ---")
            console.log("Valor do ingresso: U$", preco * 4.1)
            console.log("Valor total: U$", preco * 4.1 * quantidade)            
        } else if (categoria === 2){
            let preco = 1320
            console.log("--- Dados da compra ---")
            console.log("Nome do cliente:", nomeCompleto)
            console.log("Tipo de jogo: Internacional")
            console.log("Etapa do  jogo: Disputa de terceiro lugar")
            console.log("Categoria:", categoria)
            console.log("Quantidade de ingressos:", quantidade)
            console.log("--- Valores ---")
            console.log("Valor do ingresso: U$", preco * 4.1)
            console.log("Valor total: U$", preco * 4.1 * quantidade)          
        } else if (categoria === 3){
            let preco = 880
            console.log("--- Dados da compra ---")
            console.log("Nome do cliente:", nomeCompleto)
            console.log("Tipo de jogo: Internacional")
            console.log("Etapa do  jogo: Disputa de terceiro lugar")
            console.log("Categoria:", categoria)
            console.log("Quantidade de ingressos:", quantidade)
            console.log("--- Valores ---")
            console.log("Valor do ingresso: U$", preco * 4.1)
            console.log("Valor total: U$", preco * 4.1 * quantidade)    
        } else if (categoria === 4){
            let preco = 330
            console.log("--- Dados da compra ---")
            console.log("Nome do cliente:", nomeCompleto)
            console.log("Tipo de jogo: Internacional")
            console.log("Etapa do  jogo: Disputa de terceiro lugar")
            console.log("Categoria:", categoria)
            console.log("Quantidade de ingressos:", quantidade)
            console.log("--- Valores ---")
            console.log("Valor do ingresso: U$", preco * 4.1)
            console.log("Valor total: U$", preco * 4.1 * quantidade)    
        } else{
            console.log("Digite uma categoria correta.")
        }
    } else{
        console.log("Digite uma etapa correta.")
    }
} else if (tipoDeJogo === "DO"){
    if (etapaDoJogo === "SF"){
        if (categoria === 1) {
            let preco = 1320
            console.log("--- Dados da compra ---")
            console.log("Nome do cliente:", nomeCompleto)
            console.log("Tipo de jogo: Domestico")
            console.log("Etapa do  jogo: Semi-final")
            console.log("Categoria:", categoria)
            console.log("Quantidade de ingressos:", quantidade)
            console.log("--- Valores ---")
            console.log("Valor do ingresso: U$", preco)
            console.log("Valor total: U$", preco * quantidade)            
        } else if (categoria === 2){
            let preco = 880
            console.log("--- Dados da compra ---")
            console.log("Nome do cliente:", nomeCompleto)
            console.log("Tipo de jogo: Domestico")
            console.log("Etapa do  jogo: Semi-final")
            console.log("Categoria:", categoria)
            console.log("Quantidade de ingressos:", quantidade)
            console.log("--- Valores ---")
            console.log("Valor do ingresso: U$", preco)
            console.log("Valor total: U$", preco * quantidade)               
        } else if (categoria === 3){
            let preco = 550
            console.log("--- Dados da compra ---")
            console.log("Nome do cliente:", nomeCompleto)
            console.log("Tipo de jogo: Domestico")
            console.log("Etapa do  jogo: Semi-final")
            console.log("Categoria:", categoria)
            console.log("Quantidade de ingressos:", quantidade)
            console.log("--- Valores ---")
            console.log("Valor do ingresso: U$", preco)
            console.log("Valor total: U$", preco * quantidade)             
        } else if (categoria === 4){
            let preco = 220
            console.log("--- Dados da compra ---")
            console.log("Nome do cliente:", nomeCompleto)
            console.log("Tipo de jogo: Domestico")
            console.log("Etapa do  jogo: Semi-final")
            console.log("Categoria:", categoria)
            console.log("Quantidade de ingressos:", quantidade)
            console.log("--- Valores ---")
            console.log("Valor do ingresso: U$", preco)
            console.log("Valor total: U$", preco * quantidade)               
        } else{
            console.log("Digite uma categoria correta.")
        }
    } else if (etapaDoJogo === "DT"){
        if (categoria === 1) {
            let preco = 660
            console.log("--- Dados da compra ---")
            console.log("Nome do cliente:", nomeCompleto)
            console.log("Tipo de jogo: Domestico")
            console.log("Etapa do  jogo: Disputa de terceiro lugar")
            console.log("Categoria:", categoria)
            console.log("Quantidade de ingressos:", quantidade)
            console.log("--- Valores ---")
            console.log("Valor do ingresso: U$", preco)
            console.log("Valor total: U$", preco * quantidade)                 
        } else if (categoria === 2){
            let preco = 440
            console.log("--- Dados da compra ---")
            console.log("Nome do cliente:", nomeCompleto)
            console.log("Tipo de jogo: Domestico")
            console.log("Etapa do  jogo: Disputa de terceiro lugar")
            console.log("Categoria:", categoria)
            console.log("Quantidade de ingressos:", quantidade)
            console.log("--- Valores ---")
            console.log("Valor do ingresso: U$", preco)
            console.log("Valor total: U$", preco * quantidade)                     
        } else if (categoria === 3){
            let preco = 330
            console.log("--- Dados da compra ---")
            console.log("Nome do cliente:", nomeCompleto)
            console.log("Tipo de jogo: Domestico")
            console.log("Etapa do  jogo: Disputa de terceiro lugar")
            console.log("Categoria:", categoria)
            console.log("Quantidade de ingressos:", quantidade)
            console.log("--- Valores ---")
            console.log("Valor do ingresso: U$", preco)
            console.log("Valor total: U$", preco * quantidade)               
        } else if (categoria === 4){
            let preco = 170
            console.log("--- Dados da compra ---")
            console.log("Nome do cliente:", nomeCompleto)
            console.log("Tipo de jogo: Domestico")
            console.log("Etapa do  jogo: Disputa de terceiro lugar")
            console.log("Categoria:", categoria)
            console.log("Quantidade de ingressos:", quantidade)
            console.log("--- Valores ---")
            console.log("Valor do ingresso: U$", preco)
            console.log("Valor total: U$", preco * quantidade)              
        } else{
            console.log("Digite uma categoria correta.")
        }
    } else if (etapaDoJogo === "FI"){
        if (categoria === 1) {
            let preco = 1980
            console.log("--- Dados da compra ---")
            console.log("Nome do cliente:", nomeCompleto)
            console.log("Tipo de jogo: Domestico")
            console.log("Etapa do  jogo: Final")
            console.log("Categoria:", categoria)
            console.log("Quantidade de ingressos:", quantidade)
            console.log("--- Valores ---")
            console.log("Valor do ingresso: U$", preco)
            console.log("Valor total: U$", preco * quantidade)                  
        } else if (categoria === 2){
            let preco = 1320
            console.log("--- Dados da compra ---")
            console.log("Nome do cliente:", nomeCompleto)
            console.log("Tipo de jogo: Domestico")
            console.log("Etapa do  jogo: Final")
            console.log("Categoria:", categoria)
            console.log("Quantidade de ingressos:", quantidade)
            console.log("--- Valores ---")
            console.log("Valor do ingresso: U$", preco)
            console.log("Valor total: U$", preco * quantidade)    
        } else if (categoria === 3){
            let preco = 880
            console.log("--- Dados da compra ---")
            console.log("Nome do cliente:", nomeCompleto)
            console.log("Tipo de jogo: Domestico")
            console.log("Etapa do  jogo: Final")
            console.log("Categoria:", categoria)
            console.log("Quantidade de ingressos:", quantidade)
            console.log("--- Valores ---")
            console.log("Valor do ingresso: U$", preco)
            console.log("Valor total: U$", preco * quantidade)    
        } else if (categoria === 4){
            let preco = 330
            console.log("--- Dados da compra ---")
            console.log("Nome do cliente:", nomeCompleto)
            console.log("Tipo de jogo: Domestico")
            console.log("Etapa do  jogo: Final")
            console.log("Categoria:", categoria)
            console.log("Quantidade de ingressos:", quantidade)
            console.log("--- Valores ---")
            console.log("Valor do ingresso: U$", preco)
            console.log("Valor total: U$", preco * quantidade)    
        } else{
            console.log("Digite uma categoria correta.")
        }
    } else{
        console.log("Digite uma etapa correta.")
    }
} else{
    console.log("Digite um tipo de jogo correto.")
}