//Declaracion de clase
class Producto {
    constructor ( id, nombre, precio, img){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
    this.cantidad = 1;
    }
}

//Declaracion de Productos a traves de la Clase
const bikiniPalm = new Producto (01, "Biniki Palm",4400, "../assets/imagenes/bikinipalm.jpg");
const bikiniShell = new Producto (02, "Bikini Shell", 4400, "../assets/imagenes/bikinishell.jpg");
const bikiniTieDye = new Producto (03, "Bikini Tie Dye", 4400, "../assets/imagenes/bikinitiedye.jpg");
const bikiniFruit = new Producto (04, "Bikini Fruit", 4400, "../assets/imagenes/bikinifruit.jpg");
const bikiniLeaves = new Producto (05, "Bikini Leaves", 4400, "../assets/imagenes/bikinileaves.jpg");
const bikiniSea = new Producto (06, "Bikini Sea", 4400, "../assets/imagenes/bikinisea.jpg");
const bodyOrange = new Producto (07, "Body Orange", 5500, "../assets/imagenes/bodyorange.jpg");
const bodyEthnic = new Producto (08, "Body Ethnic", 5500, "../assets/imagenes/bikinibodyethnic.jpg");
const bodyBirds = new Producto (09, "Body Birds", 5500, "../assets/imagenes/bodybirds.jpg");
const BodyFlowerBg = new Producto (10, "Body Flower Blue Green", 5500, "../assets/imagenes/bodyflowerbluegreen.jpg");
const bodyFlowerPink = new Producto (11, "Body Flower Pink", 5500, "../assets/imagenes/bodyflowerpink.jpg");
const bodyGreen = new Producto (12, "Body Green", 5500,"../assets/imagenes/bodygreen.jpg");
const bodyJungle = new Producto (13, "Body Jungle", 5500, "../assets/imagenes/bodyjungle.jpg");
const bodyLeaves = new Producto (14, "Body Leaves", 5500, "../assets/imagenes/bodyleaves.jpg");
const bodySea = new Producto (15, "Body Sea", 5500, "../assets/imagenes/bodysea.jpg");
const bodyShell = new Producto (16, "Body Shell", 5500, "../assets/imagenes/bodyshell.jpg");
const bodyTieDye = new Producto (17, "Body Tie Dye", 5500, "../assets/imagenes/bodytiedye.jpg");
const cMaui = new Producto (18, "Conjunto Maui", 6000, "../assets/imagenes/conjuntomaui.jpg");
const cMiniki = new Producto (19, "Conjunto Miniki", 6000, "../assets/imagenes/conjuntominiki.jpg");
const cTrevo = new Producto (20, "Conjunto Trevo", 6000, "../assets/imagenes/conjuntotrevo.jpg");
const cVinca = new Producto (21,"Conjunto Vinca", 6000, "../assets/imagenes/conjuntovinca.jpg");
const cWaikiki = new Producto (22, "Conjunto Waikiki", 6000, "../assets/imagenes/conjuntowaikiki.jpg");
const cKauai = new Producto (23, "Conjunto Kauai", 6000, "../assets/imagenes/conjuntokauai.jpg");
//Array de Nuestros Productos
const productos = [bikiniPalm, bikiniShell, bikiniTieDye, bikiniFruit, bikiniLeaves, bikiniSea, bodyOrange, bodyEthnic, bodyBirds, BodyFlowerBg, bodyFlowerPink, bodyGreen, bodyJungle, bodyLeaves, bodySea, bodyShell, bodyTieDye, cMaui, cMiniki, cTrevo, cVinca, cWaikiki, cKauai];

//Arry de Carrito de Compras
let carrito = [];

//carrito a LS
if(localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}
//funcion que muestra productos

const contenedorProductos = document.getElementById("contenedorProductos");
/*const listadoProductos = "../json/productos.json";

fetch(listadoProductos)
    .then(respuesta => respuesta.json())
    .then(datos => {
        datos.forEach(producto => {
            contenedorProductos.innerHTML += `
                <div class ="card" style="min-width: 80px max-width: 100px">
                    <img src= "${producto.img}" class ="card-img-top"  alt =" ${producto.nombre}">
                    <div class="card-body">
                        <h4 class="card-title"> ${producto.nombre}</h4>
                        <h5 class="card-text">$ ${producto.precio}</h5>
                        <button class= "btn colorBoton" id = "boton${producto.id}" >Agregar al carrito </button>        
                    </div>
                </div>`
            const boton = document.getElementById(`boton${producto.id}`);
            boton.addEventListener("click", () => {
                agregarAlCarrito(producto.id)
            });
        })
    })
    .catch(error => console.log(error));*/

const mostrarProductos = () => {
    productos.forEach( producto => {
        let card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-4", "col-sm-6", "col-6");
        card.innerHTML = `
                    <div class ="card" style="min-width: 80px">
                        <img src= "${producto.img}" class ="card-img-top"  alt =" ${producto.nombre}">
                        <div class="card-body">
                            <h4 class="card-title"> ${producto.nombre}</h4>
                            <h5 class="card-text">$ ${producto.precio}</h5>
                            <button class= "btn colorBoton" id = "boton${producto.id}" >Agregar al carrito </button>        
                        </div>
                    </div>`
        contenedorProductos.appendChild(card);

        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id)
        });
    })
}

const agregarAlCarrito = (id) => {
    const productoEnCarrito = carrito.find(producto => producto.id === id);
    if(productoEnCarrito){
        productoEnCarrito.cantidad++;
    } else {
        const producto = productos.find(producto => producto.id === id);
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    Swal.fire({
        title: 'Producto ha sido agregado con exito!',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Continuar!'
    })
}

mostrarProductos();

const redesSociales = document.getElementById("redesSociales");
const redSocial = "../json/redesSociales.json"

fetch(redSocial)
.then(respuesta => respuesta.json())
.then(datos =>{
    datos.forEach(red => {
        redesSociales.innerHTML += `
        <a href="${red.link}"><i class="${red.logo}" target="_blank"></i><p>Zöld wear</p></a>
        `
    })
})