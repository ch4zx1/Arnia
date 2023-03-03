//Programa de computador para contar o número de divisores que um número natural possui. Este número deverá ser fornecido pelo usuário.


let io = require("./IO/io")

let n
let c

c = 0

io.write("Digite o número:")
n = io.readInt()

for (let i = 0; i <= n; i++)
{
	if(n % i == 0)
	{
		c++
	}
}
io.write(c)