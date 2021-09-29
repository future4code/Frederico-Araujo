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
console.log(`Boas vindas ao jogo de Blackjack!`)
const novoJogo = confirm(`Quer iniciar uma nova rodada?`)
if (novoJogo === false) {
   console.log(`O jogo acabou.`)
} else {
   let cartas = []
   let pontuacaoFinal = 0
   let passo
   for (passo = 0; passo < 2; passo++){
      const carta = comprarCarta()
      cartas.push(carta.texto)
      let pontuacao = carta.valor
      pontuacaoFinal = pontuacao++
      }
     console.log(`Usuário - cartas: ${cartas}- pontuação: ${pontuacaoFinal}`)
}