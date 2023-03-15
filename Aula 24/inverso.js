//Faça um programa que recebe do usuário 5 números e depois imprime estes números na ordem inversa ao digitado.

let n = []
n = [1, 2, 3, 4, 5]

for(let i = 0; i < n.length; i++)
{
	console.log(n[4-i])
}