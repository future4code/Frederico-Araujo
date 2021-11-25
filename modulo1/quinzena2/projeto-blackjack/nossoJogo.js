/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
// console.log(`Boas vindas ao jogo de Blackjack!`)
// const novoJogo = confirm(`Quer iniciar uma nova rodada?`)
// if (novoJogo === false) {
//    console.log(`O jogo acabou.`)
// } else {
//    const sorteio = () => {
//       const usuario = {
//             textos: [],
//             valor: 0
//       }
//       for (i = 0; i < 2; i++){
//             const carta = comprarCarta()
//             usuario.textos[i] = carta.texto
//             usuario.valor = usuario.valor + carta.valor
//       }
//       const computador = {
//             textos: [],
//             valor: 0
//       }
//       for (i = 0; i < 2; i++){
//             const carta = comprarCarta()
//             computador.textos[i] = carta.texto
//             computador.valor = computador.valor + carta.valor
//       }
//       console.log(`Usuário - cartas: ${usuario.textos} - pontuação: ${usuario.valor}`)
//       console.log(`Computador - cartas: ${computador.textos} - pontuação: ${computador.valor}`)
//       if (usuario.valor > computador.valor){
//             console.log("Usuário venceu!")
//       } else if (usuario.valor < computador.valor){
//       console.log("Computador venceu!")
//       } else {
//             console.log("Empate!")
//       }
//    }
//   sorteio()
// } 
