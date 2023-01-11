if(localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

const contenedorCarrito = document.getElementById("contenedorCarrito");

const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
});

const mostrarCarrito = () => {

    contenedorCarrito.innerHTML = "";

    const verCarritoDeCompras = localStorage.getItem('carrito');

    carrito.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-4", "col-sm-6", "col-6");
        card.innerHTML = `
                            <div class ="card" style="min-width: 80px width:auto ">
                            <img src= "${producto.img}" class ="card-img-top"  alt =" ${producto.nombre}">
                                <div class="card-body">
                                    <h4 class="card-title "> ${producto.nombre} (${producto.cantidad})</h4>
                                    <h5 class="card-text">$ ${producto.precio}</h5>
                                    <button type="button" class="btn btn-danger" id= "eliminar${producto.id}" > - </button>     
                                </div>
                            </div>`

        contenedorCarrito.appendChild(card);

        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(producto.id);
        });
    });
    calcularTotal();
}


const sumarCantidad = (id) => {
    const productoEnCarrito = carrito.find(producto => producto.id === id);
    if(productoEnCarrito){
        productoEnCarrito.cantidad++;
    } else {
        const producto = productos.find(producto => producto.id === id);
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
}

const eliminarDelCarrito = (id) => {
    const producto = carrito.find( producto => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);

    mostrarCarrito();

    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//vaciar carrito
const vaciarCarrito = document.getElementById("vaciarTodoElCarrito");
vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
});
const eliminarTodoElCarrito = () => {
    carrito = [];
    mostrarCarrito();

    localStorage.clear();
};

//total compra

const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach(producto => {
        totalCompra += producto.precio * producto.cantidad;
    });
    total.innerHTML = `$${totalCompra}`;
}
mostrarCarrito();
const continuarCompra = document.getElementById("continuarCompra");
continuarCompra.addEventListener("click", () => {
    Swal.fire({
        title: 'Deseas continuar al método de pago?',
        text: "Los productos ya casi son tuyos!",
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar!'
    })
})


mostrarCarrito();

//continuar compra
