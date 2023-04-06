//Faça um programa para receber dados de 10 pessoas e depois acusar os que são maiores de idade. Declare uma classe Pessoa e instancie um objeto para cada pessoa.

let io = require("../IO/io")
let vetor = []

class Pessoa
{
	nome = ""
	idade = ""
	maiordeidade = ""
}

for(let i = 0; i < 10; i++)
{
	let pessoa = new Pessoa()
	io.write("Digite o nome:")
	pessoa.nome = io.read()
	io.write("Digite idade:")
	pessoa.idade = io.read()
	
	if(pessoa.idade >= 18)
		pessoa.maiordeidade = "Sim"
	else
		pessoa.maiordeidade = "Não"
	vetor[i] = pessoa 
}

console.log(vetor)