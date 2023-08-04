console.log(document.querySelector('title').textContent)

// ! FUNCIONES: Son bloques de código que realizan una tarea especifica y pueden ser reutilizadas

function darBienvenida() {
    console.log('Bienvenido a todos')    
}

/* Llamar a una función */
darBienvenida() // invocan o llaman a la función


/* Gonzalo Luana Sebastián Maxi Gabriel  */

function darBienvenidaPorNombre(nombre) { // lo recibe el dato como parametro
    console.log('Bienvenidx ' + nombre)
}

darBienvenidaPorNombre('Gonzalo') // dato que le paso a la función en la invocación: se llama argumento
darBienvenidaPorNombre('Luana')
darBienvenidaPorNombre('Sebastián')
darBienvenidaPorNombre('Maxi')
darBienvenidaPorNombre('Gabriel')

/*  */
function saludarYfav(nombre, numFav) { 
    console.log('Holis mi nombre es ' + nombre + ' y mi número favorito es el: ' + numFav )
}

saludarYfav('Gonzalo', 7) 
saludarYfav('Luana', 21)
saludarYfav('Sebastián', 9)
saludarYfav('Maxi', 22)
saludarYfav('Gabriel', 17)

/* Función para manipular el DOM */

function cambiarContenido(elementoId, nuevoContenido) {
    const elemento = document.getElementById(elementoId)
    if (elemento) {
        elemento.textContent = nuevoContenido
    }
    console.log('cambiaron el contenido')
}

// debugger
cambiarContenido('parrafo', 'Soy un texto para el parrafo')
// debugger
cambiarContenido('parrafo', 'Otro contenido')


/* RESUMIENDO */

/* function nombreLaFuncion(<parametro1>, <parametro2>, <parametro3>, <parametro4>) {
     !código a ejecutar cuando se llame a la función 
}

! Llamar a la función 
nombreLaFuncion(<argumento1>, <argumento2>, <argumento3>, <argumento4>) 

* el <argumento1> se va a guardar dentro del <parametro1>
* el <argumento2> se va a guardar dentro del <parametro2>
* el <argumento3> se va a guardar dentro del <parametro3>
* el <argumento4> se va a guardar dentro del <parametro4>
*/

console.warn('/* SCOPE | AMBITO */')

/* El alcance o visibilidad que va a tener una variable en una determinada sección del código. */

/* DEFINICIÓN BLOQUE PRINCIPAL */
const globalVariable = 'Soy una variable global'
console.log(globalVariable)

function mostrarGlobalVariable() { /* Bloque de la función */
    console.log(globalVariable)
}

mostrarGlobalVariable() // Resultado: "Soy una variable global"
console.log(globalVariable)

function otroEjemplo() { /* bloque otroEjemplo */

    let variableOtroEjemplo = "Soy la variable dentro de la función otroEjemplo"

    if ( true ) { /* bloque if */
        let variableIF = 'Soy la variable IF'
        console.log(globalVariable)
        console.log(variableOtroEjemplo)
    }

    // console.log(variableIF) /* No existe esta variable */
    console.log(globalVariable) /* Si existe porque esta definida en el bloque principal */
}

otroEjemplo()
// console.log(variableIF) /* no existe porque esta definida dentro del bloque if */
// console.log(variableOtroEjemplo) /* no existe porque esta definida dentro del bloque otroEjemplo */
console.log(globalVariable) /* Si existe porque esta definida en el bloque principal */

/* CALLBACKS */
/* Un callback es una función que se pasa como argumento de otra función */

console.warn('/* CALLBACKS */')

function imprimirTexto1() {
    console.log('imprimirTexto1')
}

function imprimirTexto2() {
    console.log('imprimirTexto2')
}

imprimirTexto1() // invoco a la función con los parentesis
imprimirTexto2()
console.log(imprimirTexto1) // imprimirTexto1 tengo la referencia de la función "imprimirTexto1"
console.log(imprimirTexto2)

console.warn('--------------------------------------------')

function prueba(item, callback) { /* callback o cb */
    console.log(item) // 2 
    console.log(callback) // function imprimirTexto1() { console.log('imprimirTexto1')}

   

    if( typeof callback === 'function' ) {
        console.warn('ejecuto el callback')
        callback() // invoco después a a la función imprimirTexto1
    } else {
        console.error(`Prueba: el callback: ${callback} no es una función`)
    }
}

prueba(2, imprimirTexto1)
prueba(10, imprimirTexto2)
prueba(10, 'holis')

console.warn('-----------------------------------------------------')

// cb = callback

function operacion(a, b, cb) {
    //console.log(a, b, cb)
    return cb(a, b)
}

// operacion(num1, num2, referenciaDeFuncion)

const suma = function(a, b) { // funcion cb = suma
    return a + b
}

const resta = function(a, b) { // funcion cb => resta
    return a - b
}

const multiplicacion = function(a, b) { // funcion cb => multiplicación
    return a * b
}

const division = function(a, b) { // funcion cb => división
    return a / b
}

const resto = function(a, b) { // funcion cb => resto
    return a % b
}

console.log(`La suma es: ${operacion(2, 5, suma)}`)
console.log(`La resta es: ${operacion(2, 5, resta)}`)
console.log(`La multiplicacion es: ${operacion(2, 5, multiplicacion)}`)
console.log(`La division es: ${operacion(2, 5, division)}`)
console.log(`La resto es: ${operacion(2, 5, resto)}`)















