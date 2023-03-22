//7. Sabendo que para o Javascript uma string é um vetor de caracteres onde cada posição contém um único caracter, faça uma função que receba do usuário uma string e retorna uma outra string com os mesmos caracteres, porém invertida. 

let io = require('../IO/io')
let string = "teste :)"
let length = string.length
 
console.log(inverte(string, length))

function inverte(s, l)
{
	let invertida = ""
	for (let i = l - 1; i >= 0; i--)
	{
		invertida = invertida + s[i]
	}
	return invertida
}