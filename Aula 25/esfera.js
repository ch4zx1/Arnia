//Faça um programa de computador para calcular o volume de uma esfera. Ele deverá conter uma uma função que recebe por parâmetro o raio de uma esfera e calcula o seu volume (v = 4/3.Pi.R3). Considere o valor de Pi = 3.14
//formula = 4 / 3 * pi * raio ** 3

let io = require("../IO/io");
let entrada;

io.write("Digite o Raio de uma Esfera:")
entrada = io.readInt(); // Entrada do Raio

console.log(calcular(entrada));;

function calcular(raio)
{
	volume = 4 / 3 * 3.14 * raio ** 3;
	return volume;
}