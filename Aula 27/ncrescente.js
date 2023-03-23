//1. Faça um programa de computador que receba do usuário 10 números e depois imprima este número em ordem crescente+

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