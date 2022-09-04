let factorVelocidad = 3
let precioBase = 375

//declaracion de clase y constructor

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

const actividadMemoria = document.getElementById("actividadMemoria")

const guardarMemoria = document.getElementById("guardarMemoria")
const borrarMemoria = document.getElementById("borrarMemoria")

guardarMemoria.addEventListener("click", guardarCarrito)
borrarMemoria.addEventListener("click", borrarCarrito)


//chequeo inicial de memoria del carrito, vacio o con algo y de id

localStorage.getItem("memoriaCarrito")=== null ? actividadMemoria.innerHTML = "No tiene ningun producto guardado en la memoria." : actividadMemoria.innerHTML = `La memoria detectó que su carrito tiene ${JSON.parse(localStorage.getItem("memoriaCarrito")).length} objetos.`

let acumuladorId

localStorage.getItem("memoriaCarrito")=== null ?  acumuladorId = 0 : acumuladorId = productos[productos.length -1].id + 1

console.log(acumuladorId);


//funciones
function convertirComplejidad(complejidad){
    switch (complejidad){
        case "alta": return factorComplejidad = 1.75
        case "mediana": return factorComplejidad = 1.40
        case "baja": return factorComplejidad = 1;
        default: alert("error de switch")
        }
    }

function guardarImpresion(){
    //capturar valores
    let nombreInput = document.getElementById("nombreInput")
    let tamañoInput = document.getElementById("tamañoInput")
    let complejidadInput = document.getElementById("complejidadInput")
    
    if (nombreInput.value == ""){
            console.log("hola");
            swal({
                title: "Ingrese un nombre",
                text: "Elija un nombre para lo que quiera imprimir",
                icon: "error",
                button: "Ok, voy a ingresar algo"
        })
    }

    else{
        let impresionCreada = new Impresion(acumuladorId, nombreInput.value, tamañoInput.value, complejidadInput.value)
        console.log(impresionCreada)
        //agregar al array
        productos.push(impresionCreada)
        //aumentar acumulador
        acumuladorId++
        //para chequear
        console.log(nombreInput.value)
        console.log(tamañoInput.value)
        console.log(complejidadInput.value)
        console.log(productos);
    }
}

function desestructurador (objeto) {
    return {id, nombre, tamaño, complejidad} = objeto  
}

let carrito = document.getElementById("carrito")
function mostrarCarrito(){
    carrito.innerHTML=""
    productos.forEach((impresion)=>{
        desestructurador (impresion)  //desestructuracion
        let factorComplejidad = convertirComplejidad(complejidad)
        let nuevaImpresion = document.createElement("div")
        nuevaImpresion.classList.add ("d-flex", "flex-row", "m-auto")
        nuevaImpresion.innerHTML = `<p class = "mx-auto p-1">${nombre} tiene un tamaño de ${tamaño}cm y una complejidad ${complejidad}, lo que significa un costo de $${factorComplejidad* tamaño * precioBase} y una demora de aproximadamente ${tamaño*factorComplejidad/factorVelocidad} días.</p> <button class="btn btn-outline-secondary eliminar" onclick="eliminarItem(${id})">Eliminar del carro</button>`
        carrito.appendChild(nuevaImpresion) //agrega esto al final del elemento
    }) 
    
}

function eliminarItem(id){
    console.log("hola" + id);
    console.log(productos);
    productos.splice(id-1, 1)
    console.log(productos);
    guardarCarrito()
    mostrarCarrito()
}

function guardarCarrito(){
    console.log(productos.length);
    if (productos.length==0){
        actividadMemoria.innerHTML = "Su carrito está vacío, no guardamos nada"
        swal({
            title: "Carritto vacío!",
            text: "Su carrito está vacío, no hay nada para guardar.",
            icon: "error",
            button: "Ok, voy a agregar algo"
        })
    }
    else { localStorage.setItem("memoriaCarrito", JSON.stringify(productos))
    actividadMemoria.innerHTML = "Se guardó su carrito, puede refrescar la página.",
    swal({
        title: "Carritto guardado!",
        text: "Se ha guardado tu carrito con éxito.",
        icon: "success",
        button: "Ok"
    })
    }
}

function borrarCarrito(){
    localStorage.removeItem("memoriaCarrito")
    actividadMemoria.innerHTML = "Se ha borrado su carrito"
    swal({
        text: "Se ha eliminado la memoria con éxito.",
        button: "Ok"
    })
}
let gifRandom = Math.floor(Math.random()*27)
fetch(`https://api.giphy.com/v1/gifs/search?q=3d+printing&api_key=aD8xW1PUoE8tU5HEjDI1tWCNltvzhJvc&limit=1&offset=${gifRandom}`)
    .then((response)=> response.json())
    .then((contenido) => {
        console.log(contenido)
        let gifs = document.getElementById("gifs")
        gifs.innerHTML = `<img src=${contenido.data[0].images.fixed_height_downsampled.url} alt=${contenido.data[0].images.fixed_height_downsampled.title}>`
    });