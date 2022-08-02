let complejidad
//let prioridad
let factorVelocidad = 3
let precioBase = 250


let productos = []
class Impresion{
    constructor(nombre, tamaño, complejidad){
        this.nombre = nombre,
        this.tamaño = tamaño
        this.complejidad = complejidad       
    } 
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
        break;
        case "mediana":  complejidad = 1.25
        break;
        case "baja": complejidad = 1
        break;
        default: preguntarComplejidadDeNuevo()
        }
    }
    
    let nuevoProducto = new Impresion (nombre, tamañoIngresado, complejidad)
    productos.push(nuevoProducto)
}


function menu(){
    let eleccionMenu = parseInt(prompt ("Elija una opcion: 1- Agregar impresión 2- Impresiones en el carrito 3- Salir"))
    if (eleccionMenu <= 3 && eleccionMenu >= 1)  
    switch (eleccionMenu){
    case 1: nuevaImpresion(); menu()
    break;
    case 2: listaFinal();
    break;
    case 3: alert("¡Gracias por venir, vuelva pronto!")
    break;
    default: alert ("Error de switch")
    }
    else alert ("Elija un valor válido");
    menu()
}

function listaFinal(){
    if (productos.length == 0)
    alert ("Su carrito está vacío, agregue algo eligiendo 1.")
    else 
    productos.forEach((producto) => console.log(`Su producto ${producto.nombre} tiene un valor de $${producto.tamaño * precioBase * producto.complejidad} y un tiempo aproximado de impresión de ${parseInt(producto.tamaño * producto.complejidad / factorVelocidad)} dias.`));
    menu()
}

menu()

