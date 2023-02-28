let io = require("./IO/io")

let ano
let p4
let p100

io.write("Ano é Bissexto?")
io.write("---------------")
io.write("Informe o ano:")
ano = io.read()

io.write("--------------------")
io.write("-----Calculando-----")
io.write("--------------------")
io.write("Resultado:")

p4 = ano / 4
p100 = ano / 100

io.write(p4)
io.write(p100)

if (Number.isInteger(p4))
{
	if(Number.isInteger(p100))
	{
		io.write("Não")
	}
	else
	{
		io.write("Sim")
	}
}
else
{
	io.write("Nop")
}