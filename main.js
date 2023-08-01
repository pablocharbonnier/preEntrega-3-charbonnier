

const simulador = {
  resultado: 0,
  saludo: "¡Muchas gracias por elegirnos!",
  ticket: "Detalle de su pedido:\n",

  productosTecnologicos: [
    { nombre: "case", precio: 500 },
    { nombre: "cargador", precio: 1100 },
    { nombre: "teclado inalambrico", precio: 1700 },
    { nombre: "mouse inalambrico", precio: 600 },
    { nombre: "soporte para celular", precio: 1200 },
    { nombre: "auriculares", precio: 2200 },
  ],

  iniciarSimulador: function (calcularTotal) {
    let rta = "";
    do {
      let productoElegido = prompt("Ingrese el número del producto que desea:\n" +
        this.mostrarProductos());
      let precio = this.productosTecnologicos[productoElegido - 1].precio;
      let articulo = this.productosTecnologicos[productoElegido - 1].nombre;
      this.resultado += precio;
      this.ticket += "\n" + articulo + "=========$" + precio;
      rta = prompt("¿Desea continuar? Para terminar con su pedido, ingrese 'salir'");
    } while (rta !== "salir");

    let total = calcularTotal(this.resultado);
    alert(this.ticket +
      "\nTotal: $==========" + this.resultado +
      "\n\nTotal con descuento: $==========" + total);
  },
  mostrarProductos: function () {
    let listaProductos = "";
    this.productosTecnologicos.forEach((producto, index) => {
      listaProductos += `${index + 1}. ${producto.nombre} ($${producto.precio})\n`;
    });
    return listaProductos;
  },

  saludar: function () {
    alert(this.saludo);
  }
};

const calcularTotalConDescuento = (total) => {
  if (total >= 2000) {
    return total * 0.9;
  } else {
    return total;
  }
};

simulador.saludar();
simulador.iniciarSimulador(calcularTotalConDescuento);
