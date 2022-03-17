export const ordenaArray = (array) => {
    let novoArray = array.sort(function (a, b) {
        return a - b
    })

    return novoArray
}