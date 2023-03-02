let io = require('./IO/io')

let entrada
let divisores
let contador

contador = 1
divisores = 0

io.write("Informe o número:")
entrada = io.readInt()

while(entrada >= contador)
{
	if(entrada % contador == 0)
	{
		divisores++
		contador++

		//io.write("Divisores: " + divisores)
		//io.write("Contador: " + contador)
	}
	else
	{
		contador++
		//io.write("Divisores: " + divisores)
		//io.write("Contador: " + contador)
	}
}

if(divisores==2)
{
	io.write("Primo")
}
else
{
	io.write("Não é Primo")
}