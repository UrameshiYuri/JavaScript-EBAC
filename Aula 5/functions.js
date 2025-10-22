//primeira forma de criar uma funçao
function ola(param) {
    return `olá ${param}`
}
console.log(ola('mundo'));

//funcao anonima
(
    function (param) {
        console.log(param)
    }
)('Olá auto')//como é uma funçao por parametro precisa de alguma info dentro dela por ex 'olá auto'

var ola = function ola(param) {
    return `ola${param}`
}
console.log(ola(' olá mundo 2 '))

const dobro = (valor) => {
    return valor * 2
}
console.log(dobro(4))

const dobro2 = valor => valor * 2
console.log(dobro(4))

// se vc n tem um parametro vc pode usar _ no lugar dos () que funciona igual
let hello = () => console.log('hello')
hello()

const adiciona = (a, b, c) => a + b + c
console.log(adiciona(1, 2, 3))

const multiplica = (a = 1, b = 2, c = 3) => a * b * c
console.log(multiplica(2))