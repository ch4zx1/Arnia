//7. Faça uma função que leia um número não determinado de valores positivos e retorne a média aritmética dos mesmos. (Utilize o número -1 como critério de parada da repetição). Com esta função faça um programa para receber notas de alunos e escrever aquelas que estão acima da média.


let io = require('../IO/io')
let n = 0
let aux = 1 
let notas = []
let media = []

/*
Quando passa o valor -1, ele subtrai 1, 
então passo 1 no aux para igualar
*/

function aritmetica()
{
	let i = 0
	while(n != -1)
	{
		n = io.readInt()
		notas.push(n)
		aux = aux + n
		i++
	}
	//DEBUG
	//console.log("aux " + aux)
	//console.log("i " + (i - 1))
	//console.log(notas)
	aux = aux / (i - 1)
	acimadamedia(aux)
	return aux
}

function acimadamedia(aux)
{
	for (let i = 0; i < notas.length; i++)
	{
		if(notas[i] > aux)
		{
			media.push(notas[i])
		}
	}
}

/*
Como n é passado dentro do while
ele só altera depois de entrar no loop
então o contador i conta +1 vez para
verificar o -1 como parada, logo
passamos -1 na operacao da media para corrigir.
*/

io.write("Media: " + aritmetica())
io.write("Notas acima da media: " + media)