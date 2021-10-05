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
       const sorteio = () => {
          const usuario = {
                textos: [],
                valor: 0
          }
          for (i = 0; i < 2; i++){
                const carta = comprarCarta()
                usuario.textos[i] = carta.texto
                usuario.valor = usuario.valor + carta.valor
          }
          if (usuario.textos[0] && usuario.textos[1] === "A"){
            for (i = 0; i < 2; i++){
               const carta = comprarCarta()
               usuario.textos[i] = carta.texto
               usuario.valor = usuario.valor + carta.valor
            }
          }
          const computador = {
                textos: [],
                valor: 0
          }
          for (i = 0; i < 2; i++){
                const carta = comprarCarta()
                computador.textos[i] = carta.texto
                computador.valor = computador.valor + carta.valor
          }
          if (computador.textos[0] && computador.textos[1] === "A"){
            for (i = 0; i < 2; i++){
               const carta = comprarCarta()
               computador.textos[i] = carta.texto
               computador.valor = computador.valor + carta.valor
            }
          }
          const novaCartaUsuario = confirm(`Suas cartas são ${usuario.textos}. A carta revelada do computador é ${computador.textos[0]}. Deseja comprar mais uma carta?`)
         if (novaCartaUsuario === true){
            for(passo = 2; novaCartaUsuario === true; passo++){
               const carta = comprarCarta()
               usuario.textos[passo] = carta.texto
               usuario.valor = usuario.valor + carta.valor
               novaCartaUsuario = confirm(`Suas cartas são ${usuario.textos}. A carta revelada do computador é ${computador.textos[0]}. Deseja comprar mais uma carta?`)
         }
         } else if (novaCartaUsuario === false){
            console.log(`Usuário - cartas: ${usuario.textos} - pontuação: ${usuario.valor}`)
            console.log(`Computador - cartas: ${computador.textos} - pontuação: ${computador.valor}`)
             if (usuario.valor > computador.valor){
                   console.log("Usuário venceu!")
             } else if (usuario.valor < computador.valor){
             console.log("Computador venceu!")
             } else {
                   console.log("Empate!")
             }
            }
         }
      sorteio()
  } 
      
    