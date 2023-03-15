//Faça um programa que receba 10 números e depois imprime somente aqueles que estão abaixo da aritmética destes mesmos números

let n = []
n = [23, 43, 54, 32, 22, 77, 12, 65, 99, 11]

let aux
aux = 0

for (let i = 0; i < n.length; i++)
{
	aux = aux + n[i]
}

console.log("Valor da soma de todos os números:")
console.log(aux)

let aritmetica
aritmetica = aux / 10

console.log("Valor da Media Aritmetica:")
console.log(aritmetica)

console.log("Números menores que a media:")
for (let j = 0; j < n.length; j++)
{
	if (aritmetica > n[j])
	{
		console.log(n[j])
	}
}
