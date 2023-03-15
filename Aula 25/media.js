//Faça um programa para calcular a média de 3 notas de um determinado aluno. Este programa deverá conter uma função que recebe as 3 notas de um aluno por parâmetro e uma letra. Se a letra for A o procedimento calcula a média aritmética das notas do aluno, se for P, a sua média ponderada (pesos: 5, 3 e 2). A função deverá retornar o valor da média calculada

let io = require('../IO/io')
let nota1
let nota2
let nota3
let parametro

let peso1
let peso2
let peso3
let somapeso

let soma

io.write("Digite a primeira nota:")
nota1 = io.readInt()
io.write("Digite a segunda nota:")
nota2 = io.readInt()
io.write("Digite a terceira nota:")
nota3 = io.readInt()
io.write("Digite A para Aritmetica ou P para Ponderada:")
parametro = io.read()

media(nota1, nota2, nota3, parametro)

function media(n1, n2, n3, p)
{
	if(p == "A" | p == "a")
	{
		soma = n1 + n2 + n3 / 3
		return soma
	}
	else if(p == "p" | p == "P")
	{
		io.write("Digite o peso da primeira nota:")
		peso1 = io.readInt()
		io.write("Digite o peso da segunda nota:")
		peso2 = io.readInt()
		io.write("Digite o peso da terceira nota:")
		peso3 = io.readInt()

		soma = ((n1 * peso1) + (n2 * peso2) + (n3 * peso3)) / (peso1 + peso2 + peso3)
	}
}

io.write(soma)