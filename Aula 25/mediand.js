// 6. Faça uma função que leia um número não determinado de valores positivos e retorna a média aritmética dos mesmos. (Utilize o número -1 como critério de parada da repetição).

let io = require('../IO/io')
let n = 0
let aux = 1 

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
		aux = aux + n
		i++
	}
	//DEBUG
	//console.log("aux " + aux)
	//console.log("i " + (i - 1))
	aux = aux / (i - 1)
	return aux
}

/*
Como n é passado dentro do while
ele só altera depois de entrar no loop
então o contador i conta +1 vez para
verificar o -1 como parada, logo
passamos -1 na operacao da media para corrigir.
*/

io.write(aritmetica())