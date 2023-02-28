let io = require("./IO/io")

let n1
let n2
let comparar

io.write("Qual número é maior?")
io.write("--------------------")
io.write("Digite o primeiro número:")
n1 = io.read()
io.write("Digite o segundo número:")
n2 = io.read()
io.write("--------------------")
io.write("-----Calculando-----")
io.write("--------------------")
io.write("Resultado:")
if (n1 > n2)
{
	io.write(n1 + " é maior")
}
else if (n1 == n2)
{
	io.write("Os números são iguais. " + "(" + n1 + " e " + n2 + ")")
}
else
{
	io.write(n2 + " é maior")
}