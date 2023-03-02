//Faça um programa de computador que receba do usuário três tamanhos de segmentos de reta e acuse se estes segmentos formam ou não os lados de um triângulo. Para formar um triângulo o maior segmento deve ser menor que a soma dos outros dois. Suponha que o maior lado será digitado primeiro


let io = require('./IO/io')

let n1 //Ponta
let n2 //Lado 1
let n3 //Lado 2
let soma

io.write("É Triangulo?")
io.write("--------------------")
io.write("Digite o primeiro valor (maior):")
n1 = io.read()
io.write("Digite o segundo valor:")
n2 = io.read()
io.write("Digite do terceiro valor")
n3 = io.read()

io.write("--------------------")
io.write("-----Calculando-----")
io.write("--------------------")
io.write("Resultado:")

soma = n2 + n3

if (n1 < soma) //n1 menor q soma
{
	io.write("É Triangulo")
	
	if(n1 == n2) // N1 é igual a 2
	{
		if(n1 == n3) //N1 igual a 3 (todos iguais)
		{
			io.write("Equilátero")
		}
		else // N1 é diferente de N3, logo 1 lado diferente
		{
			io.write("Debug1")
			io.write("Isósceles")
		}
	}
	else //N1 diferente de 2
	{
		if(n1 == n3)
		{
			io.write("Debug2")
			io.write("Isósceles")
		}
		else if(n2 == n3)
		{
			io.write("Debug3")
			io.write("Isósceles")
		}
		else 
		{
			io.write("Debug4")
			io.write("Escaleno")
		}
	}
}
else
{
	io.write("Não é")
}