```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let repeticao = 0
    for(let i = 0; i < arrayDeNumeros.length; i++){
      if(arrayDeNumeros[i] === numeroEscolhido){
        repeticao = repeticao + 1
      }
    }
  if(repeticao === 0){
        return`Número não encontrado`
    } else{
        return`O número ${numeroEscolhido} aparece ${repeticao}x`
    }
}
```