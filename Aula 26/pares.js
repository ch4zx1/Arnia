//5 - Implemente uma função que recebe um vetor de números e retorna um outro vetor que contém somente os números pares

let io = require('../IO/io')

let v1 = [1, 2, 3, 4, 5, 6, 7, 8]
let t = v1.length
let r = []

//console.log("Debug Length: " + t)


for(let i = 0; i < t; i++)
{
	//console.log(i)
	par(v1, i)
}

function par(e, i)
{
	let aux = e[i]
	if(aux%2 == 0)
	{	
		r.push(e[i])
	}
	return r
}

console.log(r)