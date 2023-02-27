interface Fixacao {
    arrayDeLetras: Array<string>
}

export const fixacao = (palavra: string): Fixacao => {
    let arrayDeLetras = []

    for(let i = 0; palavra.length > i; i++){
        arrayDeLetras.push(palavra[i])
    }

    return {
        arrayDeLetras
    }
}