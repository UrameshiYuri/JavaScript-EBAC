let frutas = ['Maçã ', 'Melancia ', 'Uva ', 'Banana']
console.log(frutas.length)

let primeiraFruta = frutas[0]
console.log(primeiraFruta)

let ultimaFruta = frutas[frutas.length - 1]
console.log(ultimaFruta)

frutas.pop()//opçao para excluir o ultimo item da lista
//frutas.push('Caqui') opcao para adicionar item a lista

frutas.forEach(function (frutas) {
    console.log(frutas)
})
//alternativa usando ARROW
//frutas.forEach((frutas) => {
//   console.log(frutas)
//})

var jsonJS = [
    {
        //usando funçao pois o javascript permite
        //nao é valido para estrutura JSON
        "nome": function () {
            return 'Rodrigo'
        },
        "idade": 45
    },
    {
        "nome": 'Angela',
        "idade": 43
    }
]
console.log(jsonJS[0].nome())

const jsonRest = {
    "Nome": 'Nicoli',
    "Idade": 20
}
console.log(jsonRest)

console.log(JSON.stringify(jsonJS))//aqui ele nao importa o nome 'rodrigo' pois a estrutura nao é valida para JSON como comentado acima

const texto = '[{"idade":45},{"nome":"Angela","idade":43}]'
console.log(JSON.parse(texto))//transforma o texto em objeto de volta