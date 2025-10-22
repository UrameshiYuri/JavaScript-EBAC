//ao usar aspas para escrever uma string vc precisa \"\" para usar outra aspas dentro da sua string e evitar erro
let texto1 = "texto com \"aspas\"" + "outro texto com aspas "
//já usando apostrofe '' vc evita usar o atalho acima e pode usar "" sem problemas
//vc usa o + para con
let texto2 = 'texto com apostrofe "aqui eu uso aspas sem problema nenhum" ' + texto1
//as versoes mais recentes do javascript permite o uso de crase nas string 
//permitindo o uso de aspas e aspas simples e também usar variaveis no codigo
let texto3 = `texto com crase "aspas", 'aspas simples' ${texto1, texto2}`
console.log(texto3)
