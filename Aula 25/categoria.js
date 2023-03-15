/* 
2. Faça uma função que recebe a idade de um nadador por parâmetro e retorna a categoria desse nadador de acordo com a tabela abaixo:  

Idade			Categoria
5 a 7 anos 		Infantil A
8 a 10 anos 	Infantil B
11 a 13 anos	Juvenil A
14 a 17 anos	Juvenil B
18 ou mais		Adulto
*/

let io = require('../IO/io')
let entrada

io.write("Digite a idade:")
entrada = io.read()

function categoria(idade)
{
	if (idade >= 5 && idade <= 7)
		io.write("Infantil A")
	else if (idade >= 8 && idade <= 10)
		io.write("Infantil B")
	else if (idade >= 11 && idade <= 13)
		io.write("Juvenil A")
	else if (idade >= 14 && idade <= 17)
		io.write("Juvenil B")
	else if (idade > 14)
		io.write("Adulto")
	else if (idade <= 0)
		io.write("Essa pessoa ainda não nasceu?")
	else 
		io.write("Essa pessoa não tem idade para competir.")
}

categoria(entrada)