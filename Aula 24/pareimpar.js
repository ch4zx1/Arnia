//Faça um programa de computador que recebe do usuário 10 números e depois imprime os pares e depois os ímpares

let io = require('./IO/io')

let n = [23, 43, 54, 32, 22, 77, 12, 65, 99, 11]
let impar = []
let par = []

for(let i = 0; i < n.length; i++)
{
	if(n[i]%2 == 0)
	{
		par.push(n[i])
	}
	else
	{
		impar.push(n[i])
	}
}
io.write("Par = " + par)
io.write("Impar = " + impar)

