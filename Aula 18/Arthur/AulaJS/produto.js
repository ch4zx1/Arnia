let io = require("./IO/io")

let n1
let n2
let saida

io.write("Produto (Multiplicação)")
io.write("Digite o primeiro numero")
n1 = io.read()
io.write("Digite o segundo numero")
n2 = io.read()
saida = n1 * n2 

io.write("O produto de dois numeros é")
io.write(saida)