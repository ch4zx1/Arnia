//Faça um programa para receber nome e idade de 10 pessoas e depois imprimir em ordem de nome. 

let io = require("../IO/io")
let vetor = []
class Pessoa
{
	nome = ""
	idade = ""
}

for(let i = 0; i < 10; i++)
{
	let pessoa = new Pessoa()
	io.write("Digite o nome:")
	pessoa.nome = io.read()
	io.write("Digite idade:")
	pessoa.idade = io.read()

	vetor[i] = pessoa 
}

vetor.sort(function (a, b) 
{
	if (a.nome < b.nome)
	{
		return -1;
	}
	if (a.nome > b.nome)
	{
		return 1
	}
	return 0
})

console.log(vetor)