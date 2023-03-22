//Faça uma função que recebe dois números inteiros e retorna um vetor de duas posições, uma  com o quociente e a outra com o resto. Sabe-se que divisão é uma sequência de subtrações, portanto não use os operadores de divisão inteira do JS.

let io = require('../IO/io')
let n1
let n2
let r

io.write("Digite o Divisor:")
n1 = io.readInt()
io.write("Digite o Dividendo:")
n2 = io.readInt()

function divisao(dividendo, divisor) 
{
	let quociente = 0;
	let resto = dividendo;
	while (resto >= divisor) 
	{
	  resto -= divisor;
	  quociente++;
	}
	return [quociente, resto];
}
r = (divisao(n1, n2))
io.write(r); // [6, 2]

