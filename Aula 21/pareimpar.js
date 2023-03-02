let io = require('./IO/io')
let contador
var entrada

contador = 1

io.write("------------------------------------")
io.write("Informe até onde preciso contar:")
entrada = io.readInt()
io.write("------------------------------------")

while(contador != entrada + 1)
{
	if(contador%2 == 0)
	{
		io.write(contador + " - " + "par")
	}
	else
	{
		io.write(contador + " - " + "impar")
	}
	contador++
}
io.write("------------------------------------")