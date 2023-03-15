//5. Faça uma função que recebe um valor inteiro e verifica se o valor é par. A função deve retornar um valor booleano.

let io = require('../IO/io')

let entrada

io.write("Digite o número: ")
entrada = io.readInt()

function par(n)
{
	if (n%2 == 0)
		return true
	else
		return false
}

io.write("Verificando número: " + entrada)
io.write("PAR: " + par(entrada))