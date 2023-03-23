//3. Refaça o programa do exercício 1, mas implemente uma função que tenha como argumento um vetor e retorna outro vetor ordenado de forma crescente. (Note que você terá de usar o  .length, por motivo óbvio).

let n = [2, 3, 4, 5, 6, 8, 1, 22, 44, 11]
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