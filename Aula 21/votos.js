let io = require("./IO/io")

let votonulo
let votobranco
let votovalido
let total

io.write("Informe a quantidade de votos nulos:")
votonulo = io.readInt()

io.write("Informe a quantidade de votos em branco:")
votobranco = io.readInt()

io.write("Informe a quantidade de votos validos:")
votovalido = io.readInt()

total = votonulo + votobranco + votovalido

if (votonulo >= 0)
{
	votonulo = 100 * votonulo / total
}

if (votobranco >= 0)
{
	votobranco = 100 * votobranco / total
}

if (votovalido >= 0)
{
	votovalido = 100 * votovalido / total
}
io.write("------------------------------------")
io.write("Total de votos: " + total)
io.write("Porcentagem de nulos: " + votonulo)
io.write("Porcentagem de brancos: " + votobranco)
io.write("Porcentagem de validos: " + votovalido)
io.write("------------------------------------")