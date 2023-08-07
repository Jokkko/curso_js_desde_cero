console.log(document.querySelector('title').textContent)

/* Métodos de los arrays */

//                      0        1       2         3
let arrayColores = ['rojo', 'verde', 'azul', 'violeta']

console.log(arrayColores)

console.log(arrayColores[2])
console.log(arrayColores[0])

arrayColores[0] = 'rojito'

console.log(arrayColores)

arrayColores[4] = 'rosa'
arrayColores[5] = 'negro'
arrayColores[6] = 'amarillo'

console.log(arrayColores)

/* --------------------------------------------------------------- */
/* Métodos de los Arrays                                           */
/* --------------------------------------------------------------- */

console.warn('\n/*** Métodos de los Arrays  ****/ ')
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array


/* 
! isArray(): Método que me permite averiguar si la variable contiene un array. Retorna un boolean
! Método push(): Agregar uno o más elementos al final del array
! Método pop(): Nos permite eliminar el último elemento del array y lo devuelve
! Método shift(): Elimina uno o más elementos al principio del array
! Método unshift(): Nos permite agregar el primero elemento del array y lo devuelve
! Método splice(): Este método permite agregar, eliminar o remplazar elementos en posiciones especificas
*/

/* 
? ! isArray(): 
*/

let nombre = 'Maxi'
let isTeacher = true

console.log(typeof nombre) // string
console.log(typeof isTeacher) // boolean
console.log(typeof arrayColores) // objeto (array)
console.log(Array.isArray(arrayColores)) // true/false
console.log(typeof {x: 1, y: 2}) // objeto 


/* 
? ! push(): Agrega un elemento, o varios al final
*/
console.warn('\n/*** push(): Agrega un elemento, o varios al final  ***/')

arrayColores = ['rojo', 'verde', 'azul', 'violeta']
console.log({arrayColores})

let cantidadElementos = arrayColores.push('manzana') // retorna la nueva cantidad de elementos
console.log({arrayColores})
console.log(arrayColores.length)
console.log(cantidadElementos)

/* 
? ! push(): Elimina el último elemento
*/
console.warn('\n/*** push(): Elimina el último elemento  ***/')

let elementoEliminado = arrayColores.pop()
console.log({elementoEliminado})
console.log({arrayColores})

/* 
? ! shift(): Elimina el primer elemento
*/

console.warn('\n/*** shift(): Elimina el primer elemento  ***/')

elementoEliminado = arrayColores.shift()
console.log({elementoEliminado})
console.log({arrayColores})
 
/* 
? ! unshift(): Agrega el elemento al principio
*/

console.warn('\n/*** unshift(): Agrega el elemento al principio  ***/')


cantidadElementos = arrayColores.unshift('magenta')
console.log({cantidadElementos})
console.log({arrayColores})

/* 
? ! splice(): Nos permite agregar, eliminar o remplazar elementos
*/

console.warn('\n/*** splice(): Nos permite agregar, eliminar o remplazar elementos  ***/')

arrayColores = ['rojo', 'verde', 'azul', 'violeta']

console.log({arrayColores})

/* Agregar 2 elementos sin borrar ninguno */
/* Quiero agregar 'naranja', 'blanco' */

let elemEliminadosArray = arrayColores.splice(2, 0, 'naranja', 'blanco')
console.log({elemEliminadosArray})
console.log({arrayColores})

/* Agregar 2 elementos eliminando 2 */
/* Quiero agregar 'naranja', 'blanco' */
elemEliminadosArray = arrayColores.splice(2, 2, 'naranja', 'blanco')
console.log({elemEliminadosArray})
console.log({arrayColores})

/* Elimino 1 elemento de la posición 3 */

elemEliminadosArray = arrayColores.splice(3, 1)
console.log({elemEliminadosArray})
console.log({arrayColores})

/* Remplazar 1 elemento en la posición 4 */

elemEliminadosArray = arrayColores.splice(4, 1, 'rosa')
console.log({elemEliminadosArray})
console.log({arrayColores})










