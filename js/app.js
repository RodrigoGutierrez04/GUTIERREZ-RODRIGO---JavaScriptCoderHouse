
const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment();
let carrito = {}

// Cargamos el HTML y Ejecutamos la funcion fetchData()
document.addEventListener('DOMContentLoaded', () => {
    fetchData()
    // Local Storage
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        pintarCarrito()
    }
})

cards.addEventListener('click' , e => {
    // Usamos el e para capturar el elemento que queremos modificar
    addCarrito(e)
    
})

// Evento aumentar y disminuir cantidad
items.addEventListener('click', e => {
    btnAccion(e)
})

// Accedemos Al JSON y pintar los datos: Usando FETCH
const fetchData = async () => {
    try {
        // Hacemos peticion y obtenemos respuesta del JSON
        const res = await fetch('./js/productos.json')
        // Una vez tenemos la rpta, guardamos la data obtenida
        const data = await res.json()
        // console.log(data)
        pintarCards(data)
    } catch (error) {
        console.log(error)
    }
}


const pintarCards = data => {
// Ya tenemos al data, ahora recorremos la data
data.forEach(producto => {
templateCard.querySelector('h5').textContent = producto.nombre
templateCard.querySelector('p').textContent = producto.precio
templateCard.querySelector('img').setAttribute("src" , producto.foto)
// Cada boton debe tener el ID del producto. 
templateCard.querySelector('.btn-dark').dataset.id = producto.id 

const clone = templateCard.cloneNode(true)
fragment.appendChild(clone)
});
cards.appendChild(fragment)
}

// Mandamos el objeto al carrito (setCarrito)
const addCarrito = e => {
    Swal.fire({
        title: 'Genial!',
        text: 'Producto agregado al carro',
        icon: 'success',
        confirmButtonText: 'Cool'
})
    if (e.target.classList.contains('btn-dark')) {
        // console.log(e.target.dataset.id)
        // console.log(e.target.parentElement)
        setCarrito(e.target.parentElement)
    }
   
    e.stopPropagation()
}

const setCarrito = objeto => {
    // console.log(objeto)
    const producto = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        nombre: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }

    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    // Adquirimos la informacion y hacemos una copia de producto
    carrito[producto.id] = { ...producto }
    pintarCarrito()
}

// Debemos pintar el carrito en nuestro DOM:
const pintarCarrito = () => {
    items.innerHTML = ''

    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.nombre
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('span').textContent = producto.precio * producto.cantidad
        
        //botones
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)

    pintarFooter()

    // Local Storage
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const pintarFooter = () => {
    footer.innerHTML = ''
    
    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío</th>
        `
        return
    }
    
    // sumar cantidad y sumar totales
    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio ,0)
    // console.log(nPrecio)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)

    footer.appendChild(fragment)

    // Vaciar CarriVo BOTON
    const btnVaciar = document.getElementById('vaciar-carrito')
    btnVaciar.addEventListener('click', () => {
        carrito = {}
        pintarCarrito()
    })

}

// Aumentar y disminuir cantidad
const btnAccion = e => {

    // Para sumar cantidad:
    if (e.target.classList.contains('btn-info')) {
        // console.log(carrito[e.target.dataset.id])
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = {...producto}
        // Para que se haga el display en el DOM:
        pintarCarrito()

}
    // Para restar cantidad:
    if (e.target.classList.contains('btn-danger')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        } else {
            carrito[e.target.dataset.id] = {...producto}
        }
        pintarCarrito()
    }

    e.stopPropagation


}


// FALTA:
    // Redondear los numeros
    // Agregar boton de COMPRAR YA
