
// QUITAR OBJETOS DEL CARRITO

var quitarDeCarritoBoton = document.getElementsByClassName('btn-remover')
for (var i = 0; i < quitarDeCarritoBoton.length; i++) {
    var button = quitarDeCarritoBoton[i]
    button.addEventListener('click', quitarDeCarritoFuncion)
}

console.log(quitarDeCarritoBoton.length)
console.log(i)

// // Que el minimo de cantidad por obejto sea uno (que el usuario no pueda poner cantidades negativas de objetos)


var inputCantidad = document.getElementsByClassName('inputCantidadCarrito')
for (var i = 0; i < inputCantidad.length; i++) {
    var input = inputCantidad[i]
    input.addEventListener('change', cantidadCambiada)
}

// Añadir al Carrito
var anhadirAlCarritoBoton = document.getElementsByClassName('botonComprarArticulo')
for (var i = 0; i < anhadirAlCarritoBoton.length; i++) {
    var boton= anhadirAlCarritoBoton[i]
    boton.addEventListener('click', anhadirAlCarritoClick)
}



// Boton COMPRAR
document.getElementsByClassName('botonComprar')[0].addEventListener('click', comprarClick)



// Funcion del Boton COMPRAR

function comprarClick() {
    alert('Thank you for your purchase')
    var itemsCarrito = document.getElementsByClassName('articulosCarrito')[0]
    while (itemsCarrito.hasChildNodes()) {
        itemsCarrito.removeChild(itemsCarrito.firstChild)
    }
    actualizarTotal()
}


// Funcion Quitar Carrito
function quitarDeCarritoFuncion(event){
// target para referirnos al elemento clickeado

    var botonClickeado = event.target
    botonClickeado.parentElement.parentElement.remove()
    actualizarTotal()
}


// Funcion para que no se pueda poner cantidades negativas de objetos

function cantidadCambiada(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    actualizarTotal()
}

// Funcion Añadir al Carrito
function anhadirAlCarritoClick(event) {
    var boton = event.target
    var comprarItem = boton.parentElement.parentElement
    var titulo = comprarItem.getElementsByClassName('articuloTitulo')[0].innerText
    var precio = comprarItem.getElementsByClassName('articuloPrecio')[0].innerText
    var imagenSrc = comprarItem.getElementsByClassName('articuloImagen')[0].src
    anhadirItemAlCarrito(titulo, precio, imagenSrc)
    actualizarTotal()
}

// Lo que se añade al carrito

function anhadirItemAlCarrito(title, price, imageSrc) {
    var filaCarrito = document.createElement('div')
    // acceder a la lista de clases de un elemento  
    filaCarrito.classList.add('cart-row')
    var itemsCarrito = document.getElementsByClassName('articulosCarrito')[0]
    var nombreItemCarrito = itemsCarrito.getElementsByClassName('cart-item-title')
    for (var i = 0; i < nombreItemCarrito.length; i++) {
        if (nombreItemCarrito[i].innerText == title) {
            alert('Este item ya está en el carrito')
            return
        }
    }
    var contenidoFilaCarrito = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="inputCantidadCarrito" type="number" value="1">
            <button class="btn btn-remover" type="button">REMOVER</button>
        </div>`
    filaCarrito.innerHTML = contenidoFilaCarrito
    itemsCarrito.append(filaCarrito)
    filaCarrito.getElementsByClassName('btn-remover')[0].addEventListener('click', quitarDeCarritoFuncion)
    filaCarrito.getElementsByClassName('inputCantidadCarrito')[0].addEventListener('change', cantidadCambiada)
}
// Funcion actualizar total (precio a pagar)


function actualizarTotal() {
    var containerItemCarrito = document.getElementsByClassName('articulosCarrito')[0]
    var filaCarrito = containerItemCarrito.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < filaCarrito.length; i++) {
        var filaCarrito = filaCarrito[i]
        var precioItem = filaCarrito.getElementsByClassName('cart-price')[0]
        var cantidadItem = filaCarrito.getElementsByClassName('inputCantidadCarrito')[0]
        var precio = parseFloat(precioItem.innerText.replace('$', ''))
        var cantidad = cantidadItem.value
        total = total + (precio * cantidad)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}