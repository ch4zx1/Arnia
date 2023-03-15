//4. Escreva uma função que recebe, por parâmetro, dois valores X e Z e calcula e retorna Xz (X elevado à Z). (sem utilizar funções ou operadores de potência prontos)

let io = require('../IO/io')

let x
let z
let aux

io.write("Digite o número:")
x = io.readInt()
io.write("Elevado a:")
z = io.readInt()

function potencia(numero, elevado)
{
	aux = numero
	for (let i = 1; i < elevado; i++)
	{
		numero = numero * aux
	}
	return numero
}

io.write(x + " elevado a " + z + ": " + potencia(x, z))