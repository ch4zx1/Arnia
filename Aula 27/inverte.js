//Faça um programa de computador que receba dois valores do usuário em duas variáveis e inverta seus valores.

let io = require('../IO/io')
let n1 = [1, 2]
let n2 = [4, 5]

io.write("Váriavel 1: " + n1)
io.write("Váriavel 2: " + n2)

function inverte(v1, v2)
{
	let aux = v2
	v2 = v1
	v1 = aux

	io.write("Váriavel 1: " + v1)
	io.write("Váriavel 2: " + v2)
}

console.log(inverte(n1, n2))