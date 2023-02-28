let io = require("./IO/io")

let anos
let cigarros
let maco
let saida

io.write("Calculo Cigarro")
io.write("CIGARRO DA CANCER")
io.write("Digite o numero de cigarros:")
numero = io.read()
saida = numero ** 0.5

io.write("Raiz quadrada é")
io.write(saida)