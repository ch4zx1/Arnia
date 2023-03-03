//Programa que peça ao usuário um número natural e imprima seus divisores.

let io = require("./IO/io")

let n

io.write("Digite o número:")
n = io.readInt()

for (let i = 0; i <= n; i++)
{
	if(n % i == 0)
	{
		io.write(i)
	}
}