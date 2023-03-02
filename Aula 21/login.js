let io = require('./IO/io')

let login
let senha

let loginok
let senhaok

loginok = ("admin")
senhaok = ("admin")

io.write("Digite seu usuário:")
login = io.read()
io.write("Digite sua senha:")
senha = io.read()
io.write("------------------------------------")

if (login == loginok && senha == senhaok)
{
	io.write("Bem-vindo ao sistema " + login + "!")
	io.write("------------------------------------")
}
else
{
	io.write("Dados invalidos")
	io.write("------------------------------------")
}

