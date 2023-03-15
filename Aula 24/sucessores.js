//Faça um programa  de computador para receber 10 números inteiros e depois imprimir seus sucessores.

let n 
let aux
n = [1, 23, 22, 11, 54, 24, 12, 8, 2, 9]

for(let i = 0; i < n.length; i++)
{
	aux = n[i] + 1
	console.log(aux)
}