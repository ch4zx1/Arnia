//Faça um programa para imprimir os números pares menores que um número fornecido pelo usuário.

let io = require('./IO/io')
let n

io.write("Informe o numero:")
n = io.readInt()

for (let i = 1; i < n; i++)
{
	if(i%2 == 0)
	{
		io.write(i)
	}
}