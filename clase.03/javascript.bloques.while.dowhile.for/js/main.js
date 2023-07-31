console.log(document.querySelector('title').textContent)

/* 
! Bucle o ciclo While
* Estructura que repite un bloque de código mientras se cumpla la condición.
*/

console.warn('\n/*** ! Bucle o ciclo While ***/');

/* 
while (condicion) { // !<= condición de corte
    ? código a ejecutar en cada iteración
}
*/

let indice = 1
// let pasos = parseInt(prompt('Ingrese cantidad de pasos'))
let pasos = 10

while ( indice <= pasos ) {
    console.log(`Dio ${indice} paso de ${pasos} pasos`)
    indice++ // indice = indice + 1
}

/* 
! Bucle o ciclo Do While
* El bloque Do While es muy similar al WHILE pero garantiza que el bloque de código se ejecute al menos una vez, incluso si la condición es false.

? Casos de uso típico el menú del cajero automático o los menú de juegos.
*/

console.warn('\n/*** ! Bucle o ciclo Do While ***/');

/*
do {
    ? código a ejecutar en cada iteración
} while ( codicion ) // ! <= condición de corte se evalua al final
*/

let index = 4

//debugger
do {
    console.log(index)
    index++ // index = index + 1
    //debugger
} while ( index <= 5)



















