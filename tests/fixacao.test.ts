import { fixacao } from "../src/fixacao";

describe("fixacao", () => {
    test("", () => {
        const result = fixacao("dev")

        expect(result.arrayDeLetras).toEqual(["d", "e", "v"])
    })
})