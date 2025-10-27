function imparPar (num1){
    let resto = num1 % 2
    if (resto == 0){
        return("número par")
    }
    if (resto == 1){
        return("número impar")
    }
}
console.log(imparPar(4))
