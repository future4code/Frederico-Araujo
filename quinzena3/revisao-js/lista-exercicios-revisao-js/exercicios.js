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
    for (i=0; i < array.length; i++){
    for(j = 0; j< array.length -i -1; j++){
      if(array[j] > array[j + 1]){
        let valor = array[j]
        array[j] = array[j+1]
        array[j+1] = valor
      }
    }
  }
  return array
}

// EXERCÍCIO 12
function filmeFavorito() {
const objeto = {
  nome: "O Diabo Veste Prada",
  ano: 2006,
  diretor: "David Frankel",
  atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
}
return objeto
}

// EXERCÍCIO 13
function imprimeChamada() {
  const objeto = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  return "Venha assistir ao filme " + objeto.nome + ", de " + objeto.ano + ", dirigido por " + objeto.diretor + " e estrelado por " + objeto.atores[0] + ", " + objeto.atores[1] + ", " + objeto.atores[2] +", "  + objeto.atores[3] + "."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
const objeto = {
  largura: lado1,
  altura: lado2,
  perimetro: lado1*2 + lado2*2,
  area: lado1 * lado2
}
return objeto
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  
  const anonimo = {
    ...pessoa,
  }
  anonimo.nome = "ANÔNIMO"
  return anonimo
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
const maiores = arrayDePessoas.filter((maioridade) => {
  return maioridade.idade >= 18
})
return maiores
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const menores = arrayDePessoas.filter((menoridade) => {
    return menoridade.idade < 18
  })
  return menores
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
const multiplica = array.map((numero) =>{
  return numero*2
})
return multiplica
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const multiplicaString = array.map((numero) =>{
    const valor = numero*2
    return valor.toString()
  })
  return multiplicaString
}

// EXERCÍCIO 17C
function verificaParidade(array) {
const verifica = array.map((parOuImpar)=>{
  if(parOuImpar % 2 === 0){
    let valor = parOuImpar
    return `${valor} é par`
  }
  if(parOuImpar % 2 != 0){
    let valor = parOuImpar
    return `${valor} é ímpar`
  }
})
return verifica
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
