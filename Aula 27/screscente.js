//2. Sabendo que os operadores de comparação quando operam com strings consideram a ordem lexicográfica, faça um programa de computador para receber do usuário 6 nomes em imprimi-las em ordem alfabética

let n = ["Charles", "Gustavo", "Renato", "Tiago", "Andre", "Bruno"]
let t = n.length

function bubblesort(array)
{	
	for(let i = 0; i < t; i++)
	{
		for(let j = 0; j < t; j++)
		{ 
			if (array[j] > array[j + 1]) 
			{
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
		}
	}
	return array;
}

console.log(bubblesort(n))