//Faça um programa para receber nome e idade de 10 pessoas. Depois faça um método que aumente a idade das pessoas em 1 ano. Use a classe do exercício anterior e inclua nela o método aumentarIdade().

let io = require('../IO/io')

let vetor = []
class Pessoa
{
	nome = ""
	idade = ""

	aumentaridade()
	{
		this.idade = this.idade + 1
	}
	
}

for(let i = 0; i < 10; i++)
{
	let pessoa = new Pessoa()
	io.write("Digite o nome:")
	pessoa.nome = io.read()
	io.write("Digite idade:")
	pessoa.idade = io.readInt()
	pessoa.aumentaridade()

	vetor[i] = pessoa 
}

io.write(vetor)