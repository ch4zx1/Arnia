//Faça uma calculadora eletrônica que faz contas entre dois números. O usuário deverá digitar os números e escolher a operação entre o primeiro e o segundo, nesta ordem. Operadores = +, -, *, /, ** 

let io = require('./IO/io')

let n1
let n2
let operador
let retorno

n1 = io.readInt()
n2 = io.readInt()
operador = io.read()

soma(n1, n2, operador)

function soma(n1, n2, operador) 
{
	if(operador == "+")
	{
		retorno = n1 + n2
		io.write(retorno)
	}
	else if(operador == "-")
	{
		retorno = n1 - n2
		io.write(retorno)
	}
	else if(operador == "*")
	{
		retorno = n1 * n2
		io.write(retorno)
	}
	else if(operador == "/")
	{
		retorno = n1 / n2
		io.write(retorno)
	}
	else if(operador == "**")
	{
		retorno = n1 ** n2
		io.write(retorno)
	}
	else
	{
		io.write("Operador Inválido")
	}
	
}