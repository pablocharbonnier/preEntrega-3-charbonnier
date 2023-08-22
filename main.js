class Producto {
    constructor(id, nombre, precio, descripcion, img) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.descripcion = descripcion
        this.img = img
    }
}



class Carrito {
    constructor() {
        this.lista = []
    }

    levantarStorage(){
        let listaJSON = localStorage.getItem("lista")
        this.lista = JSON.parse(listaJSON) 
    }

    guardarEnStorage(){
        let listaJSON = JSON.stringify(this.lista)
        localStorage.setItem("lista", listaJSON )
    }

    agregar(producto) {
        this.lista.push(producto)
    }

    eliminar(productoEliminar){
        let producto = this.lista.find(producto => producto.id == productoEliminar )
        let indice = this.lista.indexOf(producto)
        this.lista.splice(indice,1)
        
    }

    mostrarProductos() {
        let carritoCard = document.getElementById("carritoCard")
        carritoCard.innerHTML = ""
        this.lista.forEach(producto => {
            carritoCard.innerHTML += `<div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${producto.img}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">precio: $${producto.precio}</p>
                <button class= "btn btn-danger" id="eliminar-${producto.id}"><i class="fa-solid fa-trash-can" ></i></button>
                </div>
              </div>
            </div>
          </div>`

        })
        this.lista.forEach(producto => {
           let btn_eliminar = document.getElementById(`eliminar-${producto.id}`)
           btn_eliminar.addEventListener("click", () => {
            this.eliminar(producto)
            this.guardarEnStorage()
            this.mostrarProductos()
           })
        })
    }
}




class ProductoController {
    constructor() {
        this.listaProductos = []
    }

    agregar(producto) {
        this.listaProductos.push(producto)
    }



    mostrarProductos() {
        let section = document.getElementById('section')
        this.listaProductos.forEach(producto => {
            section.innerHTML += ` <div class="card">
             <img src="${producto.img}" class="card-img-top" alt="...">
             <div class="card-body">
               <h5 class="card-title">${producto.nombre}</h5>
               <p class="card-text">${producto.descripcion}</p>
               <p class="card-text">$${producto.precio}</p>
               <a href="#" class="btn btn-primary" id="agregar-producto-${producto.id}">Comprar ahora</a>
             </div>
           </div>`
        })

        this.listaProductos.forEach(producto => {

            const btn = document.getElementById(`agregar-producto-${producto.id}`)

            btn.addEventListener("click", () => {
                CARRITO.agregar(producto)
                CARRITO.guardarEnStorage()
                CARRITO.mostrarProductos()

            })
        })
    }
}



const PRODUCTO1 = new Producto(1, "Smartwatch HW 68 Ultra", 3990, "Reloj gama alta", "https://clickbj.uy/wp-content/uploads/2023/04/1677057183_13896.png")
const PRODUCTO2 = new Producto(2, "Auriculares inalambricos", 1290, "Gamer X15", "https://mymimportaciones.com/wp-content/uploads/2023/08/auriculares-inalambricos-gamer-x15-02-600x600-1.jpg")
const PRODUCTO3 = new Producto(3, "Bolso Rockbros ", 1090, "Para marco de bicicleta B68 impermeable", "https://mymimportaciones.com/wp-content/uploads/2023/08/Bolso-para-marco-de-bicicleta-B68-impermeable-con-pantalla-tactil-de-6.8-Rockbros.1-1.jpg")
const PRODUCTO4 = new Producto(4, "Auriculares InPods Boom", 890, "Auricular vincha", "https://mymimportaciones.com/wp-content/uploads/2023/08/auri.jpg")
const PRODUCTO5 = new Producto(5, "Mouse inalambrico", 590, "Mouse recargable", "https://mymimportaciones.com/wp-content/uploads/2023/08/61TTi6LoprL._AC_SL1500_.jpg")
const PRODUCTO6 = new Producto(6, "Smartwatch T55 Pro Max", 1290, "Reloj + Auriculares", "https://mymimportaciones.com/wp-content/uploads/2023/08/GT-combo-AuricularesSmartwatch-2.jpg")


const CARRITO = new Carrito()
CARRITO.levantarStorage()
CARRITO.mostrarProductos()



const CONTROLADOR_PRODUCTOS = new ProductoController()




CONTROLADOR_PRODUCTOS.agregar(PRODUCTO1)
CONTROLADOR_PRODUCTOS.agregar(PRODUCTO2)
CONTROLADOR_PRODUCTOS.agregar(PRODUCTO3)
CONTROLADOR_PRODUCTOS.agregar(PRODUCTO4)
CONTROLADOR_PRODUCTOS.agregar(PRODUCTO5)
CONTROLADOR_PRODUCTOS.agregar(PRODUCTO6)





CONTROLADOR_PRODUCTOS.mostrarProductos()












