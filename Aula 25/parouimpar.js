//3.  Faça uma função que recebe um valor inteiro e verifica se o valor é par ou ímpar. A função deve retornar um valor booleano.

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

function verificar(retorno)
{
	if(retorno == true)
		io.write("PAR (true)")
	else if(retorno == false)
		io.write("IMPAR (false)")
}

io.write("Verificando número: " + entrada)
verificar(par(entrada))
