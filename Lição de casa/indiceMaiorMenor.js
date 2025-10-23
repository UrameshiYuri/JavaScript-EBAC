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