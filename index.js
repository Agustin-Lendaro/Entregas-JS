//let prioridad
let factorVelocidad = 3
let precioBase = 250

//array de productos y declaracion de clase y constructor
let productos = []

class Impresion{
    constructor(id, nombre, tamaño, complejidad){
        this.id = id,
        this.nombre = nombre,
        this.tamaño = tamaño
        this.complejidad = complejidad       
    } 
}


//comparo array de productos con la memoria
let productosEnMemoria = JSON.parse(localStorage.getItem("memoriaCarrito"))

//igualo si hay carro en memoria
if (productosEnMemoria != null){
productos = productosEnMemoria
}



let memoriaCarrito




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


//chequeo inicial de memoria del carrito



if (localStorage.getItem("memoriaCarrito")=== null){
    console.log(JSON.parse(localStorage.getItem("memoriaCarrito")));
    bienvenida.innerHTML = "La memoria detectó que su carrito está vacío."
} else {
    
    bienvenida.innerHTML = `La memoria detectó que su carrito tiene ${JSON.parse(localStorage.getItem("memoriaCarrito")).length} objetos.`
}


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




let carrito = document.getElementById("carrito")
function mostrarCarrito(){
    carrito.innerHTML=""
    productos.forEach((impresion)=>{
        let factorComplejidad = convertirComplejidad(impresion.complejidad)
        let nuevaImpresion = document.createElement("div")
        nuevaImpresion.innerHTML = `<h3>${impresion.nombre} tiene un tamaño de ${impresion.tamaño}cm y una complejidad ${impresion.complejidad}, lo que significa un costo de $${factorComplejidad* impresion.tamaño * precioBase} y una demora de aproximadamente ${impresion.tamaño*factorComplejidad/factorVelocidad} días.</h3>`
        carrito.appendChild(nuevaImpresion) //agrega esto alfinal del elemento
    }) 
}


function guardarCarrito(){
    console.log(productos.length);
    if (productos.length==0){
        actividadMemoria.innerHTML = "Su carrito está vacío, no guardamos nada"
    }
    else {memoriaCarrito = localStorage.setItem("memoriaCarrito", JSON.stringify(productos))
    actividadMemoria.innerHTML = "Se guardó su carrito, puede refrescar la página."
    }
}

function borrarCarrito(){
    localStorage.removeItem("memoriaCarrito")
    actividadMemoria.innerHTML = "Se ha borrado su carrito"
}

/* funciones viejas 

function productoAgregado(){
    alert ("Su producto ha sido agregado, vealo en la consola del navegador eligiendo 2 en el menu.")
}

function nuevaImpresion (){
        //nombre
        let nombre = prompt ("Escriba el nombre de lo que quiere imprimir")
        //tamaño
        let tamañoIngresado = prompt ("Elija un tamaño en cm entre 1 y 20 de alto para la impresión 3d")

    while (tamañoIngresado>20 || (isNaN(tamañoIngresado)) || tamañoIngresado<1 ){
        tamañoIngresado = prompt ("Elija un número entre 1 y 20");
        }
        //complejidad
        let preguntaComplejidad = prompt ("Elija nivel de complejidad alta, mediana, baja").toLowerCase()
         convertirComplejidad()

        function preguntarComplejidadDeNuevo (){ while (preguntaComplejidad != "alta" && preguntaComplejidad != "mediana" && preguntaComplejidad != "baja"){
        preguntaComplejidad = prompt ("Elija un valor válido: alta, mediana, baja").toLowerCase()
        convertirComplejidad()
        }
    }

    function convertirComplejidad(){
    switch (preguntaComplejidad){
        case "alta":  complejidad = 1.50
        productoAgregado()
        break;
        case "mediana":  complejidad = 1.25
        productoAgregado()
        break;
        case "baja": complejidad = 1
        productoAgregado();
        break;
        default: preguntarComplejidadDeNuevo()
        }
    }
    
    let nuevoProducto = new Impresion (nombre, tamañoIngresado, complejidad)
    productos.push(nuevoProducto)
}


function menu(){
    let eleccionMenu = parseInt(prompt ("Elija una opcion: 1- Agregar impresión 2- Impresiones en el carrito (en consola) 3- Salir"))
    if (eleccionMenu <= 3 && eleccionMenu >= 1)  
    switch (eleccionMenu){
    case 1: nuevaImpresion(); menu()
    return;
    case 2: listaFinal();
    return;
    case 3: alert("¡Gracias por venir, vuelva pronto!")
    return;
    default: alert ("Error de switch")
    }
    else alert ("Elija un valor válido o elija 3 pasa salir");
    menu()
}

function listaFinal(){
    if (productos.length == 0)
    alert ("Su carrito está vacío, agregue algo eligiendo 1.")
    else 
    productos.forEach((producto) => console.log(`Su producto ${producto.nombre} tiene un valor de $${producto.tamaño * precioBase * producto.complejidad} y un tiempo aproximado de impresión de ${parseInt(producto.tamaño * producto.complejidad / factorVelocidad)} dias.`));
    menu()
}
*/