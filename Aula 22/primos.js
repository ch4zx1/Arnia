//Faça um programa de computador que receba um número natural e acuse se é primo ou não. Números primos são os naturais maiores que 1 e que possuem somente 2 divisores.

let io = require('./IO/io')

let entrada
let divisores
divisores = 0

io.write("Informe o número:")
entrada = io.readInt()

for (let i = 1; entrada >= i; i++)
{
	if(entrada % i == 0)
	{
		divisores++
	}

}

if(divisores==2)
{
	io.write("Primo")
}
else
{
	io.write("Não é Primo")
}