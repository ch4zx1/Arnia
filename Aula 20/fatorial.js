let io = require("./IO/io")
let entrada
let fatoracao
let backup

io.write("Fatorial")
io.write("Informe o número:")
entrada = io.read()

fatoracao = 1
backup = entrada

while(backup >= 1)
{
    fatoracao = fatoracao*backup
    backup--
}
io.write(fatoracao)
