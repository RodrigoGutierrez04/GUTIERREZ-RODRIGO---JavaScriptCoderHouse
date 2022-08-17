// Contact Info
sessionStorage.setItem("email", "soundsphere@soundsphere.com")

let email = sessionStorage.getItem("email")
console.log(email)
// INPUT SUBMIT
let miFormulario      = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

let usuario = JSON.stringify(formulario.children[0].value)


function validarFormulario(e){
    //Cancelamos el comportamiento del evento
    e.preventDefault();
    //Obtenemos el elemento desde el cual se disparó el evento
    let formulario = e.target
    //Obtengo el valor del primero hijo <input type="text">
    miFormulario.parentElement.parentElement.remove()
    welcome.innerText = "Bienvenido/a, " + formulario.children[0].value

}

sessionStorage.setItem("wiederkommen", usuario)



// FILTRAR DE MENOR A MAYOR PRECIO
let menorMayor = document.getElementById("filterButtonLess")
menorMayor.addEventListener("click" , menorAmayor)
  
// JBL CLIP 4
let lessH51 = document.getElementById("primerH5")
let lessImg1 = document.getElementById("primerIMG")
let descripcion1 = document.getElementById("descripcion1")
let descripcion2 = document.getElementById("descripcion2")
let filterPrecio = document.getElementById("precioFilter")

// SONY SRS XB13

let lessH52 = document.getElementById("segundoH5")
let lessImg2 = document.getElementById("segundoIMG")
let descripcion3 = document.getElementById("descripcion3")
let descripcion4 = document.getElementById("descripcion4")
let filterPrecio2 = document.getElementById("precioFilter2")

// JBL FLIP 6

let lessH53 = document.getElementById("tercerH5")
let lessImg3 = document.getElementById("tercerIMG")
let descripcion5 = document.getElementById("descripcion5")
let descripcion6 = document.getElementById("descripcion6")
let filterPrecio3 = document.getElementById("precioFilter3")

// Bose SoundLink Color II
let lessH54 = document.getElementById("cuartoH5")
let lessImg4 = document.getElementById("cuartoIMG")
let descripcion7 = document.getElementById("descripcion7")
let descripcion8 = document.getElementById("descripcion8")
let filterPrecio4 = document.getElementById("precioFilter4")

// SONY SRS-XB23
let lessH55 = document.getElementById("quintoH5")
let lessImg5 = document.getElementById("quintoIMG")
let descripcion9 = document.getElementById("descripcion9")
let descripcion10 = document.getElementById("descripcion10")
let filterPrecio5 = document.getElementById("precioFilter5")

// Bose Portable Home Speaker
let lessH56 = document.getElementById("sextoH5")
let lessImg6 = document.getElementById("sextoIMG")
let descripcion11 = document.getElementById("descripcion11")
let descripcion12 = document.getElementById("descripcion12")
let filterPrecio6 = document.getElementById("precioFilter6")

function menorAmayor(){
    // JBL CLIP 4
    lessH51.innerText= "JBL CLIP 4"
    lessImg1.src = "./img/Productos/JBL Tricolor.jpeg"
    descripcion1.innerText="Marca: JBL"
    descripcion2.innerText = "Color: Rojo, negro, Azul"
    filterPrecio.innerText = "$29.99"
    //Sony SRS XB13
    lessH52.innerText="SONY SRSXB13"
    lessImg2.src = "./img/Productos/Sony SRS XB13.webp"
    descripcion3.innerText = "Marca: SONY"
    descripcion4.innerText = "Color: Negro"
    filterPrecio2.innerText = "$35.99"
    // JBL FLIP 6
    lessH53.innerText="JBL FLIP 6"
    lessImg3.src = "./img/Productos/JBL Flip 6.jpeg"
    descripcion5.innerText = "Marca: JBL"
    descripcion6.innerText = "Color: Negro"
    filterPrecio3.innerText = "$49.99"
    // Bose SoundLink Color II
    lessH54.innerText="Bose SoundLink Color II"
    lessImg4.src = "./img/Productos/BoseSoundLinkII.jpeg"
    descripcion7.innerText = "Marca: Bose"
    descripcion8.innerText = "Color: Negro"
    filterPrecio4.innerText = "$59.99"
    // Sony SRS XB23
    lessH55.innerText="Sony SRS XB23"
    lessImg5.src = "./img/Productos/XB23.jpeg"
    descripcion9.innerText = "Marca: Sony"
    descripcion10.innerText = "Color: Negro"
    filterPrecio5.innerText = "$79.99"
    // Bose Portable Home Speaker
    lessH56.innerText="Bose Portable Home Speaker"
    lessImg6.src = "./img/Productos/1-28.png"
    descripcion11.innerText = "Marca: Bose"
    descripcion12.innerText = "Color: Negro"
    filterPrecio6.innerText = "$99.99"
}

// (FIN) FILTRAR DE MENOR A MAYOR PRECIO

// FILTRAR DE MAYOR A MENOR PRECIO

let mayorMenor = document.getElementById("filterButtonGreater")
mayorMenor.addEventListener("click" , mayorAmenor)

function mayorAmenor(){
    // Bose Portable Home Speaker
    lessH51.innerText= "Bose Portable Home Speaker"
    lessImg1.src =  "./img/Productos/1-28.png"
    descripcion1.innerText="Marca: Sony"
    descripcion2.innerText = "Color: Negro"
    filterPrecio.innerText = "$99.99"

    //Sony SRS XB23
    lessH52.innerText="SONY SRS XB23"
    lessImg2.src = "./img/Productos/XB23.jpeg"
    descripcion3.innerText = "Marca: SONY"
    descripcion4.innerText = "Color: Negro"
    filterPrecio2.innerText = "$79.99"

     // Bose SoundLink Color II
     lessH53.innerText="Bose SoundLink Color II"
     lessImg3.src = "./img/Productos/BoseSoundLinkII.jpeg"
     descripcion5.innerText = "Marca: Bose"
     descripcion6.innerText = "Color: Negro"
     filterPrecio3.innerText = "$59.99"

    // JBL FLIP 6
    lessH54.innerText="JBL FLIP 6"
    lessImg4.src = "./img/Productos/JBL Flip 6.jpeg"
    descripcion7.innerText = "Marca: JBL"
    descripcion8.innerText = "Color: Negro"
    filterPrecio4.innerText = "$49.99"
        
     //Sony SRS XB13
     lessH55.innerText="SONY SRSXB13"
     lessImg5.src = "./img/Productos/Sony SRS XB13.webp"
     descripcion9.innerText = "Marca: SONY"
     descripcion10.innerText = "Color: Negro"
     filterPrecio5.innerText = "$35.99"

    
  
    // JBL CLIP 4
    lessH56.innerText= "JBL CLIP 4"
    lessImg6.src = "./img/Productos/JBL Tricolor.jpeg"
    descripcion11.innerText="Marca: JBL"
    descripcion12.innerText = "Color: Rojo, negro, Azul"
    filterPrecio6.innerText = "$29.99"
    
}


// // Que el minimo de cantidad por obejto sea uno (que el usuario no pueda poner cantidades negativas de objetos)


let inputCantidad = document.getElementsByClassName('inputCantidadCarrito')
for (let i = 0; i < inputCantidad.length; i++) {
    let input = inputCantidad[i]
    input.addEventListener('change', cantidadCambiada)
}

// Añadir al Carrito
let anhadirAlCarritoBoton = document.getElementsByClassName('botonComprarArticulo')
for (let i = 0; i < anhadirAlCarritoBoton.length; i++) {
    let boton= anhadirAlCarritoBoton[i]
    boton.addEventListener('click', anhadirAlCarritoClick)
}



// Boton COMPRAR
document.getElementsByClassName('botonComprar')[0].addEventListener('click', comprarClick)



// Funcion del Boton COMPRAR

function comprarClick() {
    alert('Gracias por tu compra')
    let itemsCarrito = document.getElementsByClassName('articulosCarrito')[0]
    while (itemsCarrito.hasChildNodes()) {
        itemsCarrito.removeChild(itemsCarrito.firstChild)
    }
    actualizarTotal()
}


// Funcion Quitar Carrito
function quitarDeCarritoFuncion(event){
// target para referirnos al elemento clickeado

    let botonClickeado = event.target
    botonClickeado.parentElement.parentElement.remove()
    actualizarTotal()
}


// Funcion para que no se pueda poner cantidades negativas de objetos

function cantidadCambiada(event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    actualizarTotal()
}

// Funcion Añadir al Carrito
function anhadirAlCarritoClick(event) {
    let boton = event.target
    let comprarItem = boton.parentElement.parentElement
    let title = comprarItem.getElementsByClassName('articuloTitulo')[0].innerText
    let price = comprarItem.getElementsByClassName('articuloPrecio')[0].innerText
    let imageSrc = comprarItem.getElementsByClassName('articuloImagen')[0].src
    anhadirItemAlCarrito(title, price, imageSrc)
    actualizarTotal()
}

// Lo que se añade al carrito

function anhadirItemAlCarrito(title, price, imageSrc) {
    var filaCarrito = document.createElement('div')
    // acceder a la lista de clases de un elemento  
    filaCarrito.classList.add('cart-row')
    let itemsCarrito = document.getElementsByClassName('articulosCarrito')[0]
    let nombreItemCarrito = itemsCarrito.getElementsByClassName('cart-item-title')
    for (let i = 0; i < nombreItemCarrito.length; i++) {
        if (nombreItemCarrito[i].innerText == title) {
            alert('Este item ya está en el carrito')
            return
        }
    }
    let contenidoFilaCarrito = `
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
    let containerItemCarrito = document.getElementsByClassName('articulosCarrito')[0]
    var filaCarrito = containerItemCarrito.getElementsByClassName('cart-row')
    let total = 0
    for (let i = 0; i < filaCarrito.length; i++) {
        var filaCarrito = filaCarrito[i]
        let precioItem = filaCarrito.getElementsByClassName('cart-price')[0]
        let cantidadItem = filaCarrito.getElementsByClassName('inputCantidadCarrito')[0]
        let precio = parseFloat(precioItem.innerText.replace('$', ''))
        let cantidad = cantidadItem.value
        total = total + (precio * cantidad)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}