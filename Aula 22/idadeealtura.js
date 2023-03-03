//Faça um programa que leia a idade e a altura de 5 pessoas.  Ao final, o programa deverá acusar a maior Idade e a média das alturas.

let io = require("./IO/io")

let idade
let altura

let guardar
let guardar2

let divisao
let divisao2

guardar = 0
guardar2 = 0

for (let i = 0; i < 5; i++)
{
	io.write("Digite idade:")
	idade = io.readInt()
	io.write("Digite a altura")
	altura = io.readInt()

	if (idade > guardar)
	{
		guardar = idade
	}
	guardar2 = guardar2 + altura
}

divisao2 = guardar2 / 5

io.write("A maior idade é: " + guardar + " e a media de altura é: " + divisao2)