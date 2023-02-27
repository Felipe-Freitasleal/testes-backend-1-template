import { pratica2 } from "../src/pratica2"

describe("pratica 2", () => {
    test("Deve retornar true quando for um número inteiro par", () => {
        const result = pratica2(10)

        expect(result).toBe(true)
    })

    test("Deve retornar false quando for um número inteiro impar", () => {
        const result = pratica2(13)

        expect(result).toBe(false)
    })
})