let carrito = [];

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
function ready(){
    let inputCantidad = document.getElementsByClassName('inputCantidadCarrito')
    for (let i = 0; i < inputCantidad.length; i++) {
        let input = inputCantidad[i]
        input.addEventListener('change', cantidadCambiada)
    }
}
// Funcion para que no se pueda poner cantidades negativas de objetos


function cantidadCambiada(event) {
    let input = event.target
    console.log(input)
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    total()
}




if(localStorage.getItem("carrito")){
    carrito=JSON.parse(localStorage.getItem("carrito"));
}
let lista = document.getElementById("milista");
const tablaDelCarrito = document.querySelector('table')


// ------------------ Render -----------------//
renderizarProductos();

function renderizarProductos(){
    for (const producto of productos){
        lista.innerHTML += `
       
        <!-- Card 1 -->
        <div class="col-md-4" id="filterFirstLess">
          <div class="card mt-3">
            <div class="product-1 align-items-center p-2 text-center row">
        <div id="productoTarjeta" class="product-1 align-items-center p-2 text-center">
             <img id="primerIMG" src="${producto.foto}" alt="" class="rounded articuloImagen">
             <h5 class="articuloTitulo" id="primerH5">${producto.nombre}</h5>
            <!-- Card info -->
            <div class="mt-3 info">
                <span class="text1 d-block" id="descripcion1">Lorem ipsum dolor ist amet.</span>
                <span class="text1" id="descripcion2">Lorem impsum dolor.</span>
            </div>
            
            <div class="costwatch mt-3 text-dark">
            <span class="articuloPrecio" id="precioFilter">$${producto.precio}</span>
            <div class="star mt-3 align-items-center">
                <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
            </div>
            </div>
        <!-- Card info ends here -->
        </div>

      <!-- Button for cards -->

      <button class="btn btn-danger btn-primary botonComprarArticulo p-3 watch text-center text-white mt-3 cursor" id="btn${producto.id}">Añadir al carrito</button>
      </div>
      </div>`;
       
    }
    productos.forEach(producto => {
        document.getElementById(`btn${producto.id}`).addEventListener("click", function(){
            agregarAlCarrito(producto);
            
        });
    })
}

// ------------------ Fin Render -----------------//



function agregarAlCarrito(producto){


    carrito.push(producto);
    console.log(carrito)
    alert("Producto "+producto.nombre+" agregado al carro")
    document.getElementById("tablabody").innerHTML+=
    `<tr class="cart-row">
    <td>${producto.id}</td>
    <td class="cart-item-title"><img src="${producto.foto}" width="70" height="70" alt=""> ${producto.nombre}</td>
    <td class="carrito-precio" id="precio${producto.precio}">${producto.precio}</td>
    <td><input class="inputCantidadCarrito carrito-cantidad" type="number" value="1"></td>
    <td><button class="btn deleteBtn btn-remover" id="btnremove${producto.id}" type="button">REMOVER</button ></td>

</tr>`;

document.getElementsByClassName("carrito-cantidad")[0].addEventListener('change', cantidadCambiada)


total()

}




function anhadirLocalStorage(){
    localStorage.setItem("carrito", JSON.stringify(carrito))
}



// Borrar Fila
function BorrarFila(e){

    if(!e.target.classList.contains("deleteBtn")){
        return;
    }
const btn = e.target;
btn.closest('tr').remove()

total()


}
tablaDelCarrito.addEventListener("click",BorrarFila)


// Boton COMPRAR
document.getElementsByClassName('botonComprar')[0].addEventListener('click', comprarClick)

// Funcion del Boton COMPRAR

function comprarClick() {
    alert('Gracias por tu compra')
    localStorage.clear()
    let itemsCarrito = document.getElementsByClassName("articulosCarrito")[0]
    while (itemsCarrito.hasChildNodes()) {
        itemsCarrito.removeChild(itemsCarrito.firstChild)
    }
    
}

function total(){
   let containerItemCarrito = document.getElementsByClassName('articulosCarrito')[0]
   console.log(containerItemCarrito)
   var filaCarrito = containerItemCarrito.getElementsByClassName('cart-row')
   console.log(filaCarrito)
    let total = 0
    for (let i=0; i < filaCarrito.length; i++){
        var filaCarritos = filaCarrito[i]
        let precioItem = filaCarritos.getElementsByClassName("carrito-precio")[0]
        let cantidadItem = filaCarritos.getElementsByClassName("carrito-cantidad")[0]
        let precio = parseFloat(precioItem.innerText.replace('$', ''))
        let cantidad = cantidadItem.value
        total = total + (precio * cantidad)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}


// FALTA: 
    // AGREGAR FINALIZAR COMPRA (Borrado de estructuras, mensaje de confirmacion de pedido, )

    // QUITAR objeto de CARRITO (y del LocalStorage)
    // FUNCION ACTUALIZAR COSTO TOTAL
    //CANTIDAD * PRECIO 
    // GRACIAS POR SU COMPRA o COMPRA EXITOSA

