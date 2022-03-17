import { retornaMaiusculo } from "./desafio2";

describe("teste funcao retorna maiusulo", () => {
    test("olá, mundo", () => {
        const resultado = retornaMaiusculo("olá, mundo")

        expect(resultado).toEqual("Olá, Mundo")
    })

    test("eu, você e o zoboomafoo", () => {
        const resultado = retornaMaiusculo("eu, você e o zoboomafoo")

        expect(resultado).toEqual("Eu, Você E O Zoboomafoo")
    })
})