//3 - Faça uma função que recebe do usuário um vetor de números e retorna a média aritmética desses números.

let io = require('../IO/io')
let n = [1, 34, 23, 21, 88]
let x = n.length
let aux = 0

function media(vetor)
{
	for(let i = 0; i < x; i++)
	{
		aux = aux + vetor[i]
	}
	aux = aux / x
	return aux
}
io.write("Media: " + media(n))