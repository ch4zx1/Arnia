//Faça um programa de computador para receber 10 números e depois imprimir os primos.

let io = require('./IO/io')

let primos = [3, 2, 4, 5, 7, 8, 9, 17, 19, 31, 50]
let divisores = 0

for (let i = 0; i < primos.length; i++)
{
	for (let j = 1; primos[i] >= j; j++)
	{
		if (primos[i] % j == 0)
		{
			divisores++	

			if (divisores==2)
			{
				io.write(primos[i])
			}
		}
	}
}