// 4 - Faça uma função que recebe do usuário um vetor e retorna outro vetor com os valores em ordem invertida

let io = require('../IO/io')

let v1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let t = v1.length

function inverte(e)
{ 
	let r = []

	for(let i = t; i != 0; i--)
	{
		r.push(e[i - 1]) // -1 fix
	}
	return r
}

io.write(inverte(v1))