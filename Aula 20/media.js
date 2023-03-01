let io = require("./IO/io")

var numeros
var base
io.write("-----------------------------------------")
io.write("Calcular media aritmética")
io.write("Digite os numeros com espaço:")
numeros = io.read()

var splitted  = numeros.split(' ')

io.write("Digite o numero base:")
base = io.readInt()
io.write("-----------------------------------------")

var i = 0
var numberTotal = 0

while (i < splitted.length)
{
	numberTotal += parseInt(splitted[i])
	//io.write(splitted[i])
	i++
}
io.write("Soma dos valores: " + numberTotal)
io.write("Base: " + base)
io.write("Media: " + numberTotal / base)
io.write("-----------------------------------------")
