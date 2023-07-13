let resultado = 0
let saludo = "muchas gracias por elgirnos"
let ticket = "detalle de su pedido: \n"

let rta = ""


do{
    
    let articulo = prompt("ingrese un articulo")
    let precio = Number(prompt("ingrese el precio del articulo")) 

    resultado = resultado + precio
    ticket = ticket +"\n" +articulo+"\t\t$"+ precio

    rta = prompt("¿desea continuar? , para terminar con su pedido ingrese 'salir'" )


}while(rta != "salir")

alert(ticket + "\n\ntotal $"+resultado)

if(resultado >= 2000){
    //descuento del 10%
    resultadoConDescuento = resultado * 0.9

    alert(ticket
        +"\ntotal: $"+ resultado
        +"\n\n\ntotal con descuento:"+ resultadoConDescuento)
}else{
    alert(ticket
        +"\n\ntotal: $"+ resultado)
}
    

function saludar(){
    let saludo = "muchas gracias por elegirnos"
    console.log(saludo)
  }
saludar(alert(saludo))

