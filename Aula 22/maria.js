// Faça um programa para pedir 10 nomes de pessoas ao usuário e acusar quantas se chamam “Maria”

let io = require('./IO/io')
let nome
let maria
let maria2
let j

j = 0
maria = "maria"
maria2 = "Maria"

io.write("------------------------")

for (let i = 0; i < 10; i++)
{
	io.write("Digite os nomes:")
	nome = io.read()
	if (nome == maria)
	{
		j++
	}
	else if (nome == maria2)
	{
		j++
	}
}
io.write("------------------------")
io.write(j + " nome(s) é/são Maria")

