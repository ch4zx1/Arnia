//Faça um programa para receber 10 números do usuário e acusar qual deles é o menor número.

let io = require('./IO/io')
let n
let b

b = Number.MAX_VALUE

for (let i = 0; i < 10; i++)
{
	io.write("Informe o número")
	n = io.readInt()
	if (n < b)
	{
		b = n
	}
}
io.write(b)