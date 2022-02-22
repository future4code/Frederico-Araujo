export const retornaMaiusculo = (string) => {
    const palavras = string.split(" ")
    let palavrasMaiusculas = []
    // const palavrasMaiusculas = palavras.toUpperCase()
    for (let i = 0; i < palavras.length; i++) {
        const palavraMaiuscula = palavras[i][0].toUpperCase() + palavras[i].substr(1)
        palavrasMaiusculas[i] = palavraMaiuscula
    }

    const novaString = palavrasMaiusculas.join(" ")

    return novaString
}