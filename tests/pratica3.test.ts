import { pratica3 } from "../src/pratica3"

describe("pratica 3", () => {
    test("dev receber dois números e retornar um objeto contendo a soma e multiplicação, guardando respectivamente a soma e multiplicação dos números recebidos", () => {
        const result = pratica3(3, 9)

        expect(result.soma).toBe(12)
        expect(result.mult).toBe(27)
    })
})