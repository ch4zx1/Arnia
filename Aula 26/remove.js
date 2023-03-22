//8. Escreva uma função que remova um carácter de uma string.Exemplo: aux = tiraCaracter(“wilmara”, “a”) // Neste será atribuído “wilmr”  para aux.

let string = "paoaoaoaoaoaoao"
let remove = "p"
let t = string.length

console.log(removedor(string, remove))

function removedor(s, r)
{
	let nstring = ""
	for(let i = 0; i < t; i++)
	{
		if(s[i] != r)
		{
			nstring = nstring + s[i]
		}
	}
	return nstring
}