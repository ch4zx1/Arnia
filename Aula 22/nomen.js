//Faça um programa para escrever seu nome n vezes, sendo n fornecido pelo usuário

let io = require('./IO/io')

let n
let nome

io.write("Digite o nome:")
nome = io.read()
io.write("Digite quantas repetições:")
n = io.readInt()

for (let i = 1; i <= n; i++)
{
	io.write("Nome: " + nome + "(" + i + ")")
}