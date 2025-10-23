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
