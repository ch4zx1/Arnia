let io = require("./IO/io")

let frase
let vezes
let i

i = 1

io.write("-----------------------------------------")
io.write("Digite a quantas vezes vai se repetir:")
vezes = io.readInt()

if (Number.isInteger(vezes))
{
	io.write("Digite a frase:")
	frase = io.read()
	io.write("-----------------------------------------")

	while (i <= vezes)
	{
		io.write(frase + " (" + i + ")")
		i++
	}
	io.write("-----------------------------------------")
}
else
{
	io.write("-----------------------------------------")
	io.write("O numero de vezes precisa ser um inteiro!")
}
