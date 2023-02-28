let io = require("./IO/io")

let n1 //Ponta
let n2 //Lado 1
let n3 //Lado 2
let soma

io.write("É Triangulo?")
io.write("--------------------")
io.write("Digite o valor da ponta:")
n1 = io.read()
io.write("Digite do lado direito:")
n2 = io.read()
io.write("Digite do lado esquerdo:")
n3 = io.read()

io.write("--------------------")
io.write("-----Calculando-----")
io.write("--------------------")
io.write("Resultado:")

soma = n2 + n3

if (n1 < soma) //n1 menor q soma
{
	io.write("É Triangulo")
}
else
{
	io.write("Não é")
}