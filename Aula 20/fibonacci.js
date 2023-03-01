let io = require("./IO/io")

let entrada
let i
let n1
let n2
let n3


io.write("-----------------------------------------")
io.write("Sequencia de Fibonacci")
io.write("Informe quantos paramentros quer exibir:")

entrada = io.readInt()

io.write("-----------------------------------------")

i = 0
n1 = 0
n2 = 1

while(i <= entrada) //menor ou igual
{
	io.write(n1)
	n3 = n1 + n2
	n1 = n2
	n2 = n3
	i++
}

io.write("-----------------------------------------")
