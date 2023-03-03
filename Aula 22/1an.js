//Fala um programa para escrever de 1 a n, sendo n fornecido pelo usuário

let io = require('./IO/io')
let n

io.write("Informe o n:")
n = io.readInt()

for (let i = 1; i <= n; i++)
{
	io.write(i)
}