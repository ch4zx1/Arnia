let io = require("./IO/io")

let n1
let n2
let n3
let valor

io.write("Escreva o primeiro número:")
n1 = io.readInt()
io.write("Escreva o segundo número:")
n2 = io.readInt()
io.write("Escreva o terceiro número:")
n3 = io.readInt()

if (n1 > n2) // N1 maior que N2
{
	if(n1 > n3) //N1 maior que N3
	{
		io.write("Primeiro é maior")
	}
	else // N3 maior que N1
	{
		io.write("Terceiro é maior")
	}
}
else // N2 maior que N1
{
	if(n2 > n3) //N2 maior que N3
	{
		io.write("Segundo é maior")
	}
	else // N3 maior que N1
	{
		io.write("Terceiro é maior")
	}
}