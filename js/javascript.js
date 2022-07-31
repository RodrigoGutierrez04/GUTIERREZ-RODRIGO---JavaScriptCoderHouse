const productosPrecios = [{ precio: 50, producto: "Parlante 1" },
{ precio: 10,  producto: "Parlante 2" },
{ precio: 100,  producto: "Parlante 3" }];

// Filtrar por precios
const filtro = productosPrecios.filter((el) => el.precio <= 50)

const productos = ["undefined", "Parlante 1", "Parlante 2", "Parlante 3"];

const precios = [undefined,50,10,100]

let productosCarrito = parseInt(prompt("¿Cuál de los siguientes productos vas a llevar?\nEscribe " + productos.indexOf("Parlante 1") + " para " + productos[1] + " (" +precios[1] + " USD)\nEscribe " + productos.indexOf("Parlante 2") + " para " + productos[2] + " (" +precios[2] + " USD)\nEscribe " + productos.indexOf("Parlante 3") + " para " + productos[3] + " (" +precios[3] + " USD)\nEscribe 4 para mostrar EN CONSOLA los productos no mayores que 50 USD"))

let subtotal = 0

function sumarPrecio(){
    subtotal=subtotal + precios[productosCarrito]
}


while(productosCarrito!=5){
    switch(productosCarrito){
        case 1:
            alert("Se agregó " +  productos[productosCarrito] + " (" + precios[productosCarrito]+" USD) al carrito")
            sumarPrecio()
            break;
        case 2:
            alert("Se agregó " +  productos[productosCarrito] + " (" + precios[productosCarrito]+" USD) al carrito")
            sumarPrecio()
            break;
        case 3:
            alert("Se agregó " +  productos[productosCarrito] + " (" + precios[productosCarrito]+" USD) al carrito")
            sumarPrecio()
            break;
        
        case 4:
            alert("Por favor, procede a escribir 5 y posteriormente, revisa la consola")
            console.log(filtro)
            break;

        default:
            alert("Opción no valida")

        }

        productosCarrito = parseInt(prompt("¿Va a agregar otro producto?\nEscribe " + productos.indexOf("Parlante 1") + " para " + productos[1] + " (" +precios[1] + " USD)\nEscribe " + productos.indexOf("Parlante 2") + " para " + productos[2] + " (" +precios[2] + " USD)\nEscribe " + productos.indexOf("Parlante 3") + " para " + productos[3] + " (" +precios[3] + " USD)\nEscribe 4 para mostrar EN CONSOLA los productos no mayores que 50 USD\nEscribe 5 si no va a agregar ningún otro producto y mostrar su SUBTOTAL."))
        }

        alert("El subtotal es USD " + subtotal)



