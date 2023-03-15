//Faça um programa que descubra quais os perfeitos menos que 1000 

let io = require('./IO/io')
let n
let b

n = 1
b = 0
while(n < 1000)
{
	//io.write("while")
	for (let i = 0; i < 1000; i++)
	{
		//io.write(i + "i")
		//io.write(n + "n")
		//io.write("for")
		if(n % i == 0)
		{
			//io.write("if")
			b = b + i
			
		}
		else
		{
			n++
		}
	}

	if (b == n)
	{
		io.write(b + " Perfeito")
	}
}