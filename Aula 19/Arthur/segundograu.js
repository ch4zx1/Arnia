let io = require("./IO/io")

let a
let b
let c
let x1
let x2
let delta

io.write("Equação de Segundo Grau")
io.write("-----------------------")
io.write("Informe o valor A:")
a = io.readFloat()
io.write("Informe o valor B:")
b = io.readFloat()
io.write("Informe o valor C:")
c = io.readFloat()


delta = b*b-4*a*c
x1 = (-b + delta ** (1/2)) / (2 * a)
x2 = (-b - delta ** (1/2)) / (2  *a)

io.write("------------------------")
io.write("X1 = " + x1)
io.write("X2 = " + x2)
io.write("------------------------")
io.write("Valor de delta: " + delta)
io.write("------------------------")

if(a == 0) 
{
	io.write("Erro: O valor de A precisa ser diferente de 0")
}
else
{
	if (delta < 0)
	{
		io.write("Não possui raizes reais\n")
	}
	else if (delta == 0)
	{
		io.write("A equação possui raízes reais iguais\n")
	}
	else if (delta > 0)
	{
		io.write("A equação possui raízes reais e distintas.\n")
	}
	
}
