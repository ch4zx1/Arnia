let io = require("./IO/io")

let n
let i
let soma

io.write("-----------------------------------------")
io.write("Multiplos de 5")
io.write("Informe quantas vezes quer multiplicar:")
n = io.read()
io.write("-----------------------------------------")

i = 0
while(i <= n)
{
	soma = 5*i
 	io.write("5x" + i + " = " + soma)
	i++
}
io.write("-----------------------------------------")
