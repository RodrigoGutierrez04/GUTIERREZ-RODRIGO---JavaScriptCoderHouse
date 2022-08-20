let carrito = [];
if(localStorage.getItem("carrito")){
    carrito=JSON.parse(localStorage.getItem("carrito"));
}
let lista = document.getElementById("milista");
const tablaDelCarrito = document.querySelector('table')



// Render
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
    // eventos boton
    productos.forEach(producto => {
        document.getElementById(`btn${producto.id}`).addEventListener("click", function(){
            agregarAlCarrito(producto);
            
        });
    })
}

function agregarAlCarrito(producto){
    carrito.push(producto);
    console.log(carrito)
    alert("Producto "+producto.nombre+" agregado al carro")
    document.getElementById("tablabody").innerHTML+=
    `<tr>
    <td>${producto.id}</td>
    <td><img src="${producto.foto}" width="70" height="70" alt=""> ${producto.nombre}</td>
    <td>${producto.precio}</td>
    <td><input class="inputCantidadCarrito" type="number" value="1"></td>
    <td><button class="btn btn-remover deleteBtn" type="button">REMOVER</button></td>

</tr>`;

let btn = document.getElementById(`btnremove${producto.id}`)
btn.onclick = () => {btn.parentElement.remove()}


localStorage.setItem("carrito", JSON.stringify(carrito));
}

function BorrarFila(e){
    if(!e.target.classList.contains("deleteBtn")){
        return;
    }
const btn = e.target;
btn.closest('tr').remove()
}
tablaDelCarrito.addEventListener("click",BorrarFila)



    
// FALTA: 
    // AGREGAR FINALIZAR COMPRA (Borrado de estructuras, mensaje de confirmacion de pedido, )

    // QUITAR objeto de CARRITO (y del LocalStorage)
    // FUNCION ACTUALIZAR COSTO TOTAL
    //CANTIDAD * PRECIO 
    // GRACIAS POR SU COMPRA o COMPRA EXITOSA

