let io = require("./IO/io")

let numero
let saida

io.write("Raiz Quadrada")
io.write("Digite o numero desejado:")
numero = io.read()
saida = numero ** 0.5

io.write("Raiz quadrada é")
io.write(saida)