//Faça um programa de computador para receber preços de 10 produtos e depois imprimir os preços que estão acima da média.

let io = require('./IO/io')

let precos
let aux
aux = 0
precos = [56, 76, 12, 23, 55, 201, 400, 100, 1, 2]

for(let i = 0; i < precos.length; i++)
{
	aux = aux + precos[i]
}
aux = aux / 10
io.write("Media: " + aux)

for(let i = 0; i < precos.length; i++)
{
	if (precos[i] > aux)
	{
		io.write("Acima da media: " + precos[i])
	}
}