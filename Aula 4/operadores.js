/*
    + Adição
    - Subtração
    * Multiplicação
    / Divisão
    ** Exponenciação
    % Modulo 
    ++ Incremento
    -- Decremento
*/

let x = 0, y = 1
// se eu quero dizer que:
x = x + y
//eu posso dizer tambem que:
x += y

x = x - y
x -= y

x *= y
x /= y
x %= y

x = x ** y
x **= y

if (x == y) {

}
/*
    == igualdade
    === valor igual e tipo igual
    != diferente
    !== diferente valor ou tipo
    > maior
    < menor
    >= maior igual
    <= menor igual
    ? ternario
*/
if (1 == '1') {
    console.log('Valido')
} else {
    console.log('invalido')
}
//exemplo de como usar o ? ternario
1 === '1 ' ? console.log('valido') : console.log('invalido')
//usando o || OU logico no exemplo
1 === '1 ' || 1 == '1' ? console.log('valido exemplo usando ||') : console.log('invalido valido exemplo usando ||')
//usando && E logico no exemplo
1 === '1 ' && 1 == '1' ? console.log('valido exemplo usando &&') : console.log('invalido valido exemplo usando &&')
//usando ! para inverter o resultado no exemplo
!(1 === '1 ') && 1 == '1' ? console.log('valido exemplo usando !') : console.log('invalido valido exemplo usando !')

/*
    && E logico
    || OU logico
    ! negação
*/