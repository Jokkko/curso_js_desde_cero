console.log(document.querySelector('title').textContent)

/* //////////////////////////////// */
/* Bloque FOR                       */
/* //////////////////////////////// */

// Similar al bloque while pero vamos a tener que inicializar dentro mismo bloque la variable que vamos a utilizar para iterar.

 
// [1]: Inicialiazción de la variable. // ! Paso a. Una vez sola.
// [2]: La evaluación de la premisa (Si se cumple o no). // ! Paso b. por cada iteración
// [3]: El incremento del indice. // ! Paso c. Por cada iteración.

/* 
for ([1];[2];[3]) {
   * Código a ejecutar por cada iteración 
}
*/ 

for (let i = 0; i < 10; i++) { // condición de corte ( i < 10 )
    console.log('Se ejecuto, veces:', i)
}

console.warn('------------------------------------')

//               0    1    2    3    4
const letras = ['a', 'b', 'c', 'd', 'e']

console.log(letras[1]) // b
console.log(letras[4]) // e

console.log(letras.length) // Voy a saber la cantidad de elementos
/* 
console.log(letras[0])
console.log(letras[1])
console.log(letras[2])
console.log(letras[3])
console.log(letras[4])
 */
// debugger
for (let i = 0; i < letras.length; i++) {
    //debugger
    console.log(letras[i])
}

/* 
! Dentro de todos estos ciclos (While, DoWhile, For) van existir unas palabras reservadas (break, continue)
*/

console.warn('\n/** break y continue')

for (let i = 0; i <= 10; i++) {
    debugger
    if ( i === 5) {
        debugger
        break // Rompe el ciclo si i es igual a 5. No continua iterando.
    }

    if ( i % 2 === 0) {
        debugger
        continue // Salta a la siguiente iteracción si i es par. 
    }
    debugger
    console.log(i) // Imprime solo los impares.

}




















