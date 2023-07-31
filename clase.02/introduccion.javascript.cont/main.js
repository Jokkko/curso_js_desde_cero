import './css/style.css'
console.log('Clase 1 - Introducción Javascript')

/* -------------------------------------- */
/* Consolas                               */
/* -------------------------------------- */

console.log('Consola general para mostrar un mensaje en las DevTools')
console.warn('Consola en color amarillo de alerta. En las DevTools')
console.error('Cosonla en color rojo de error. EN las Tools')

/* Comillas simples para las cadenas de caracteres (strings) */

/* -------------------------------------- */
/* Comentarios                            */
/* -------------------------------------- */

console.warn('\n/*** Comentarios ***/')

/* 
console.warnfasdfadf() // ! Además de describir el funcionando, me permite comentar el código para que no se ejecute
*/

// Comentario en una sola línea

/*
Esto es
un comentario
en varias
líneas
*/

/* -------------------------------------- */
/* Variables                              */
/* -------------------------------------- */
console.warn('\n/*** Variables ***/')

/* 
? Es un contenedor de información. Que se aloja en memoria.
? Para crear una variable voy a utilizar una palabra reservada del lenguaje (var, let, const)
 */

/* --------------------------------------------------- */
/* constructor          |   var   |   let   |  const   */
/* --------------------------------------------------- */
/* alcance              |  global |  local  |  local   */
/* redeclarable         |    si   |    no   |    no    */
/* redefinible          |    si   |    si   |    no    */
/* --------------------------------------------------- */

/* constructor <nombre> = 'valor a almacenar' */

/* 
! NO USAR VAR
*/

// nombre = 'Maximiliano' /* acá estoy construyendo una variable y almacenando el valor 'Maximiliano' */
// console.log(nombre) /* 'Maximiliano' */
// var nombre = 'Luis' /* acá estoy construyendo una variable con var y almacenando el valor 'Luis' */
// console.log(nombre) /* 'Luis' */
// var nombre = 'Valentina' /* acá estoy construyendo una variable con var y almacenando el valor 'Valentina' */
// console.log(nombre) /* 'Valentina' */

console.warn('\n/*** CONSTRUCTORES (let) ***/')

/* 
! PRIMITIVOS
* Number: Entero o decimal, número que ocupa 64bits de memoria
* String: Secuencia de caracteres utilizada para representar un texto
* Boolean: Dato lógico que solo puede tener 2 valores. (True o false)
* Undefined: Este valor se asigna cuando creo una variable sin definir o inicializar.
*/

/*
!  Tipo de dato String (Cadena de caracteres)
*/

let nombre = 'Maximiliano' /* declarar una variable */
console.log(nombre) /* 'Maximialiano' */
// let nombre = 'Luis' /* No se puede volver a redeclarar */
let apellidoMax = 'Príncipe' 
console.log(apellidoMax)

nombre = 'Luis' /* redefinir el valor almacenado en nombre. */
console.log(nombre)

/*
!  Tipo de dato Number (Entero o decimal)
*/

let numero // Declaro una variable sin asignarle o inicializarla
console.log(numero)
numero = 22
console.log(numero)
console.log(typeof numero) /* => me va a contar el tipo de dato que tiene la variable */


/*
!  Tipo de dato Boolean (true o false)
*/

console.warn('\n/*** Tipo de dato Boolean (true o false) ***/')

let hoyLlueve = false
console.log(hoyLlueve) //false
console.log(typeof hoyLlueve) /* que tipo de dato es */
hoyLlueve = true // le redefiní el valor a hoyLlueve
console.log(hoyLlueve) // true


console.warn('\n/*** JavaScript se lo conoce como un lenguaje debilmente tipado (Tipado dinamico) ***/')

// Quiere decir que Javascript me permite almacenar en las variables cualquier tipo de dato. Si por ejemplo mi variable es de tipo string y le asigno un number no me va a arrojar ningun error, va a almacenar donde antes tenía un string un number.


let nombreApellido = 'Maximiliano Príncipe'
console.log(nombreApellido) /* Maximiliano Príncipe */
console.log(typeof nombreApellido) /* string */
nombreApellido = 2
console.log(nombreApellido) /* 2 */
console.log(typeof nombreApellido) /* number */

/* En resumen podemos decir que javascript no me obliga a definir un tipo de dato cuando creo una variable. Eso lo convierte en un lenguaje debilmente tipado o tipado dinámico. */


console.warn('\n/*** CONSTRUCTORES (const) ***/')
/* Constantes, es un espacio de memoria que no se va a poder cambiar */

const PI = 3.141559 /* Cuando la construyo, debo definirle un valor */
/* PI = 222 */ /* ERROR. NO puedo redefinir. */
console.log(PI)
console.log(typeof PI) /* number */

/* https://en.wikipedia.org/wiki/Super_PI */


/* --------------------------------------- */
/*  CONCATENACIÓN                          */
/* --------------------------------------- */
console.warn('\n/**** CONCATENACIÒN ***/')

let primerNombre = 'Maximiliano'
let segundoNombre = 'Luis'
let apellido = 'Príncipe'
/*
 ! JAVASCRIPT CASE SENSITIVE 
*/
let Apellido = 'Príncipe'
let APellido = 'Príncipe'
let APEllido = 'Príncipe'
let APELLIDO = 'Príncipe'

/* Operador de concatenación  ( + ) */
/* A la unión en este caso de varios strings se le conoce como concatenación */
console.log(primerNombre + ' ' + segundoNombre + ' ' + apellido) 
/* Template Strings (backticks => ` => alt + 92) */
console.log(`Bienvenido, ${primerNombre} ${segundoNombre} ${apellido}`)

/* 
!Javascript es un lenguaje debilemente tipado. Tipado dinamico 
*/

let nombreMascota = 'Fido' // String
console.log(nombreMascota)
console.log('El tipo de dato de nombre de la mascota es: ' + typeof nombreMascota) /* <= camel case */

nombreMascota = 12 // redefiniendo la variable a un tipo de dato number

console.log(nombreMascota) // <= 12
console.log(`El tipo de dato de nombreMascota es: ${typeof nombreMascota}`) // tipo de dato number

nombreMascota = true // redefino el valor que tengo almacenado y tipo de dato

console.log(nombreMascota)
console.log(`El tipo de dato de nombreMascota es: ${typeof nombreMascota}`) // tipo de dato boolean

/*
! Además de tener los tipos de datos primitivos tenemos los tipos de dato (Objeto)

* Array (Listas)
* Objectos
* Function
*/

/*
! ARRAY (LISTAS - ARREGLOS)
Son una estructura de datos indexada. O sea que tienen un indice.
*/
/*                    0        1       2         3 */
let arrayColores = ['rojo', 'verde', 'azul', 'amarillo']

console.log(arrayColores)
console.log(typeof arrayColores) // tipo de dato objeto

console.log(arrayColores[2]) // accediendo al azul
console.log(arrayColores[0]) // accediendo al rojo

console.log(arrayColores.length) // Cuando elementos tiene dentro el array

/* Cambiar el valor almacenado en cierta posición */
arrayColores[2] = 'azulito!'

console.log(arrayColores)

/*                 0        1       2         3     */
arrayColores = ['rojo', 'verde', 'azul', 'amarillo']
console.log(arrayColores)

arrayColores[4] = 'rosa'
arrayColores[5] = 'violeta'
console.log(arrayColores)

/* 
! Objeto (Tipo objeto)
*/

let nombreMaxi = 'Maxi'
let apellidoMaxi = 'Principe'
let alturaMaxi = 2.0
let colorOjosMaxi = 'Avellaneda'

let nombreTadeo = 'Tadea'
let apellidoTadeo = 'Abrruzzese'
let alturaTadeo = 1.9
let colorOjosTadeo = 'Quilmes'


console.warn('\n/*** Objeto literal  ***/')
/*
! Objeto literal 
*/

let valentina = { nombre: 'Valentina' }

let maxi = { 
    nombre: 'Maximiliano', // string
    apellido: 'Principe', // string
    altura: 2.0, // number
    colorOjos: 'Avellaneda', // string
    profesor: true // boolean
}

let tadeo = {
    nombre: 'Tadeo', // string
    apellido: 'Abruruzzese', // string
    altura: 1.9, // number
    colorOjos: 'Quilmes', // string
    profesor: false // boolean
}

console.log(valentina)
console.log(tadeo)
console.log(maxi)

// ! Notación punto (Dot notation)

console.log(tadeo.altura)
console.log(tadeo.nombre)
console.log(tadeo.profesor)

console.log(valentina.nombre) // { nombre: 'Valentina' }

// ! Notación corchete (Bracket notation)

console.log(maxi['altura']) // => 2.0
console.log(maxi['nombre']) // => 'Maxi'
console.log(maxi['apellido']) // => 'Príncipe'
console.log(maxi['profesor']) // => true

console.log(typeof maxi)
console.log(typeof tadeo)

/*
OBJETOS

BOM => Browser Object Model (window)

* alert() | Muestra un mensaje en una ventanita
* prompt() | Me permite solicitar datos al cliente
* confirm() | Mensaje de confirmación de tipo boolean
* console.log() | Mensaje salida en la consola del navegador

DOM => Document Object Model (document)

* document.write() Método para escribir en el documento html (NO RECOMENDADO)

* getElementById('id') => Me devuelve el primer elemento con ID que aparezca en la página, según corresponde.

* getElementByClassName('class') => Devuelve una lista de elementos que concuerden con el nombre de la clase indicada. (texto-rojo)

* getElementByTagName('tag') => Devuelve una lista de elementos que correspondan con la etiqueta elegida. (h1, div, strong)

* querySelector('Selector') // Devuelve el primer elemento que coincida con el selector cuya sintaxis es similar a css. ['.texto-rojo']

* querySelectorAll('Selector') // Devuelve una lista de elemento que coincida con el selector cuya sintaxis es similar a css. ['.texto-rojo']

*/

console.warn('\n/*** BOM => Browser Object Model (window) ***/')

// window.alert('Hola mundo')
// alert('Hola mundo')
window.console.log('Hola mundo')
console.log('Hola mundo')

console.warn('\n/*** DOM => Document Object Model (document) ***/')


































































































