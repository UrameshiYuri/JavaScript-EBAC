//1. Calcule o MDC (máximo divisor comum) entre dois números
function mdc(a, b) {
    while (b !== 0) {
        let resto = a % b;
        a = b;
        b = resto;
    }
    return a;
}
console.log(mdc(48, 18))
//2. Dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maior valor e o índice do menor valor.
function indiceMaiorMenor(array) {
    let indiceMaior = 0, indiceMenor = 0
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[indiceMaior]) {
            indiceMaior = i;
        }
        if (array[i] < array[indiceMenor]) {
            indiceMenor = i;
        }
    }
    return { indiceMaior, indiceMenor };
}
console.log(indiceMaiorMenor([4, 10, 2, 8, 6]));
//3. Listando todos os números inteiros abaixo de 10 que são múltiplos de 3 ou 5, ficamos com 3, 5, 6 e 9. A soma desses múltiplos é 23. Crie uma função que retorne a soma de todos os múltiplos de 5 ou 7 abaixo de 1000.
function somaMultiplos() {
    let soma = 0;
    for (let i = 1; i < 1000; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            soma += i;
        }
    }
    return soma;
}

console.log(somaMultiplos());