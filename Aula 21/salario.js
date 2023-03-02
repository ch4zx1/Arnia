let io = require("./IO/io")

let salario
let porcentagem

io.write("Informe o salario:")
salario = io.readInt()

io.write("Informe a porcentagem de aumento:")
porcentagem = io.readInt()

porcentagem = salario / porcentagem

if (salario > 0)
{
	salario = salario + porcentagem
	io.write(salario)
}
else
{
	io.write(salario)
	io.write("Você está desempregado!")
}