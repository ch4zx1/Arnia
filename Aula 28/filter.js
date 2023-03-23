//1. Escreva uma função que recebe um array de números, dado este array, a função deverá
//Deixar no array somente os números ímpares (utilize filter)
//Somar todos os números restantes (utilize forEach)
//Escrever a string "Javascript é muito bom" no console um número x de vezes, sendo x a soma dos números restantes do array (utilize o while)

var n = [1, 2, 3, 4, 5, 6, 7]

function par(vetor)
{
	if (vetor % 2 == 0)
	{
		return vetor
	}
}

var numero = n.filter(par)
console.log(numero)


let aux = 0
function somar(nn)
{
	aux += nn
	return aux
}
numero.forEach(somar)
console.log(aux)

while (aux > 0)
{
	console.log("Javascript é muito bom")
	aux--
}

