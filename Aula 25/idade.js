//Faça uma função que recebe a idade de uma pessoa em anos, meses e dias e retorna essa idade expressa em dias. 

let io = require('../IO/io')

let anos
let meses
let dias

io.write("Anos:")
anos = io.readInt()
io.write("Meses:")
meses = io.readInt()
io.write("Dias:")
dias = io.readInt()

function calculo(a, m, d)
{
	d = d + (a * 365)
	d = d + (m * 30)
	return d
}

console.log("Idade em dias: " + calculo(anos, meses, dias))