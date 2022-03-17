import { ordenaArray } from "./desafio1"

describe("testa array ordenado", () => {

    test("array ordenado [3, 2, 1]", () => {
        const resultado = ordenaArray([3, 2, 1])

        expect(resultado).toEqual([1, 2, 3])
    })

    test("array ordenado [20, 30, 10, 9]", () => {
        const resultado = ordenaArray([20, 30, 10, 9])

        expect(resultado).toEqual([9, 10, 20, 30])
    })
})