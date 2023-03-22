//2 - Faça uma função que recebe do usuário um vetor de números e retorna a soma desses números.

let io = require('../IO/io')
let n = [1, 34, 23, 21, 88]
let x = n.length
let aux = 0

function soma(vetor)
{
	for(let i = 0; i < x; i++)
	{
		aux = aux + vetor[i]
	}
	return aux
}
io.write("Soma: " + soma(n))