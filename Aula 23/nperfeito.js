//Faça um programa que leia um  número natural e acuse se ele é ou não número um número perfeito. Sabendo que números perfeitos são números que cuja soma de seus divisores, exceto ele mesmo, é igual a ele. Exemplo:  os divisores de 28 são: 1,2,4,7,14 e 28. Como 1 + 2+4+7+14=28,  temos que 28 é perfeito.

let io = require('./IO/io')
let n
let b

b = 0

io.write("Digite o numero desejado:")
n = io.readInt()

for (let i = 0; i < n; i++)
{
	if(n % i == 0)
	{
		b = b + i
		io.write(b + "b")
		io.write(i + "i")
	}
}

if (b == n)
{
	io.write("Perfeito")
}