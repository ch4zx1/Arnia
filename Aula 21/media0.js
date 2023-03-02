let io = require('./IO/io')

let entrada
let backup
let contador

contador = -1
backup = 0 

io.write("--------------------------------------------------------")
if(entrada > 0)
{
	io.write("Apenas números maiores que 0!")
}
else
{
	while (entrada != 0)
	{
		io.write("Digite um número para adicionar ou 0 para executar:")
		entrada = io.readInt()

		backup = backup + entrada
		contador++
	}
	io.write("--------------------------------------------------------")
	io.write("Base da media: " + contador)
	io.write("Media: " + (backup / contador))
	io.write("--------------------------------------------------------")

}