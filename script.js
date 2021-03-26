var valorSemanas = prompt ('Quantas semanas de gestação a pessoa tem?')

var valorMesesFinal = valorSemanas / 4.345

var valorMesesFix = valorMesesFinal.toFixed(0)

var resultado = "A gestação tem: " + valorMesesFix + " meses."

document.write("<h2>" + resultado + "</h2>")

//segredo nosso 
