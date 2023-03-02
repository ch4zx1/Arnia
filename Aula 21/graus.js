let io = require("./IO/io")

let temperatura

io.write("Informe a temperatura em Fahrenheit:")
temperatura = io.read()

temperatura = (temperatura - 32) * 5/9

io.write(temperatura + " °C")