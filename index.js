//let prioridad
let factorVelocidad = 3
let precioBase = 375

//array de productos y declaracion de clase y constructor

class Impresion{
    constructor(id, nombre, tamaño, complejidad){
        this.id = id,
        this.nombre = nombre,
        this.tamaño = tamaño
        this.complejidad = complejidad       
    } 
}

//ve si hay productos guardados en memoria o declara carrito vacio
let productos = JSON.parse(localStorage.getItem("memoriaCarrito")) || []

//captura de botones y declaración de eventos
const agregar = document.getElementById("agregar")
const mostrar = document.getElementById("mostrar")

agregar.addEventListener("click", guardarImpresion)
mostrar.addEventListener("click", mostrarCarrito)

const bienvenida = document.getElementById("bienvenida")
const actividadMemoria = document.getElementById("actividadMemoria")

const guardarMemoria = document.getElementById("guardarMemoria")
const borrarMemoria = document.getElementById("borrarMemoria")

guardarMemoria.addEventListener("click", guardarCarrito)
borrarMemoria.addEventListener("click", borrarCarrito)

//chequeo inicial de memoria del carrito, vacio o con algo

localStorage.getItem("memoriaCarrito")=== null ? bienvenida.innerHTML = "La memoria detectó que su carrito está vacío." : bienvenida.innerHTML = `La memoria detectó que su carrito tiene ${JSON.parse(localStorage.getItem("memoriaCarrito")).length} objetos.`

//funciones
function convertirComplejidad(complejidad){
    switch (complejidad){
        case "alta": return factorComplejidad = 1.50
        case "mediana": return factorComplejidad = 1.25
        case "baja": return factorComplejidad = 1;
        default: alert("error de switch")
        }
    }


function guardarImpresion(){
    //capturar valores
    let nombreInput = document.getElementById("nombreInput")
    let tamañoInput = document.getElementById("tamañoInput")
    let complejidadInput = document.getElementById("complejidadInput")
    let impresionCreada = new Impresion(productos.length+1, nombreInput.value, tamañoInput.value, complejidadInput.value)
    console.log(impresionCreada)
    //agregar al array
    productos.push(impresionCreada)
    //para chequear
    console.log(nombreInput.value)
    console.log(tamañoInput.value)
    console.log(complejidadInput.value)
    console.log(productos);
    }


function desestructurador (objeto) {
    return {nombre, tamaño, complejidad} = objeto  
}

let carrito = document.getElementById("carrito")
function mostrarCarrito(){
    carrito.innerHTML=""
    productos.forEach((impresion)=>{
        desestructurador (impresion)  //desestructuracion
        let factorComplejidad = convertirComplejidad(complejidad)
        let nuevaImpresion = document.createElement("div")
        nuevaImpresion.innerHTML = `<h3>${nombre} tiene un tamaño de ${tamaño}cm y una complejidad ${complejidad}, lo que significa un costo de $${factorComplejidad* tamaño * precioBase} y una demora de aproximadamente ${tamaño*factorComplejidad/factorVelocidad} días.</h3>`
        carrito.appendChild(nuevaImpresion) //agrega esto alfinal del elemento
    }) 
}

function guardarCarrito(){
    console.log(productos.length);
    if (productos.length==0){
        actividadMemoria.innerHTML = "Su carrito está vacío, no guardamos nada"
        swal({
            title: "Carritto vacío!",
            text: "Su carrito está vacío, no hay nada para guardar.",
            icon: "error",
            confirmButtonText: "Ok, voy a agregar algo"
        })
    }
    else { localStorage.setItem("memoriaCarrito", JSON.stringify(productos))
    actividadMemoria.innerHTML = "Se guardó su carrito, puede refrescar la página.",
    swal({
        title: "Carritto guardado!",
        text: "Se ha guardado tu carrito con éxito.",
        icon: "success",
        confirmButtonText: "Ok"
    })
    }
}

function borrarCarrito(){
    localStorage.removeItem("memoriaCarrito")
    actividadMemoria.innerHTML = "Se ha borrado su carrito"
    swal({
        text: "Se ha eliminado la memoria con éxito.",
        confirmButtonText: "Ok"
    })
}

