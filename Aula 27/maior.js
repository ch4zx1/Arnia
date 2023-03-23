//Faça um programa de computador que coloque o maior elemento de um vetor na última posição

let vetor = [23, 43, 55, 12, 32, 11, 10]
let maior = 0

for(let i = 0; i < vetor.length; i++)
{
	if(vetor[i] > maior)
	{
		maior = vetor[i]
	} 
}

for(let i = 0; i < vetor.length - 1; i++)
{
	if(vetor[i] == maior)
	{
		for(let j = i; j < vetor.length; j++)
		{
			vetor[j] = vetor[j + 1]
		}
		vetor[vetor.length - 1] = maior
	}
}
console.log(vetor)