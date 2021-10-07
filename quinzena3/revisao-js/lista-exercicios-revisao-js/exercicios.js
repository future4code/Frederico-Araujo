// EXERCÍCIO 01
function inverteArray(array) {
  const arrayInvertida = []
  for (i = 0; i < array.length; i++ ){
        let a = i + 1
        let index = array.length - a
        arrayInvertida[i] = array[index]
  }
  return arrayInvertida
  }

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const arrayPar = array.filter((numero) => {
    return numero % 2 === 0
    })
    const arrayParAoQuadrado = arrayPar.map((numero) => {
    return numero ** 2
    })
    return arrayParAoQuadrado
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const arrayPar = array.filter((numero) => {
    return numero % 2 === 0
    })
    return arrayPar
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let valor = 0
  for(i = 0; i < array.length; i++){
    if(valor < array[i]){
    valor = array[i]
    } else{
      i ++
    }
    }
    return valor
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  const quantidade = array.length
  return quantidade
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const array = []
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3 
  array [0] = booleano1 && booleano2 && !booleano4
  array [1] = (booleano1 && booleano2) || !booleano3
  array [2] = (booleano2 || booleano3) && (booleano4 || booleano1)
  array [3] = !(booleano2 && booleano3) || !(booleano1 && booleano3)
  array [4] = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
  
  return array
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
const array = []
for (i = 0; i < n; i++){
    array[i] = 2 * i
}
return array
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a != b && a != c && b != c ){
    return 'Escaleno'
  } else if (a === b && a === c){
    return 'Equilátero'
  } else if (a === b && a != c){
    return 'Isósceles'
  } else if (a != b && b === c){
    return 'Isósceles'
  } else if (a === c && c != b ){
    return 'Isósceles'
  }
  
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  
  const objeto = {
    maiorNumero: 0,
    maiorDivisivelPorMenor: 0,
    diferenca: 0 
  }

  if(num1 >= num2){
    objeto.maiorNumero = num1
    objeto.maiorDivisivelPorMenor = num1 % num2 === 0
    objeto.diferenca = num1 - num2
  } else if(num2 > num1){
    objeto.maiorNumero = num2
    objeto.maiorDivisivelPorMenor = num2 % num1 === 0
    objeto.diferenca = num2 - num1
  }
  return objeto

}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  const arrayOrdenadaDecrescente = []
  
  let valor = Number()
  for(a = 0; a < (array.length + array.length ); a++){
      for(i = 0 ; i < array.length; i++){
       if (valor < array[i]){
         valor = array[i]
        } else if (valor === array[i]){
          array[i] = 0
          valor = Number()
        }
      }
      arrayOrdenadaDecrescente[a] = valor    
  }
  const ordernadaSemZeros = arrayOrdenadaDecrescente.filter((number) => {
    return number != 0
  })
  const segundoMaiorEMenor = []
  segundoMaiorEMenor[0] = ordernadaSemZeros[1]
  segundoMaiorEMenor[1] = ordernadaSemZeros[ordernadaSemZeros.length - 2]
  return segundoMaiorEMenor
}
// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
