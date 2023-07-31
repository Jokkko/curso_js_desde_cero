console.log(document.querySelector('title').textContent)

/*
! Bloque if es una estructura de control utilizada para ejecutar una porción de código si una determinada condición es verdadera y sino es verdadera otro bloque de código. 
*/

/*
* condición puede ser verdadera o falsa
if (condicion) {
    ? codigo que se va ejecutar si la condición es verdadera
}

* con bloque else

if (condicion) {
    ? codigo que se va ejecutar si la condición es verdadera
} else {
    ? codigo que se va ejecutar si la condición no es verdadera
}
*/

console.warn(`/* Ejemplo de bloque if */`);

/* let edad = 17 */

// Solo puede ingresar los mayores de 18



/* if ( edad >= 18) { 
    // debugger // breakpoint
    console.log('Sos mayor de edad')
    console.log('Podes acceder al contenido')
} else {
    // debugger // breakpoint
    console.log('Sos menor de edad')
    console.log('Olvidate papa! No podes tomarte un whisky!')
} */

/* 
! El debugger es una herramienta para observar internamente como funciona mi programa.
* Para activarlo lo puedo hacer con la palabra reservada 'debugger' (eso genera un breakpoint)
*/

console.warn('------------------------------------------------')

/// Solo pueden ingresar los mayores de 18 y menores de 80

// ! Prueba de escritorio


// |   edad    |  edad >= 18  |  edad <= 80   | edad >= 18 && edad <= 80  |  resultado
// |    15     |     false    |     true      |   false    &&    true     |    false
// |    30     |     true     |     true      |    true    &&    true     |     true
// |    45     |     true     |     true      |    true    &&    true     |     true
// |    81     |     true     |     false     |    true    &&    false    |    false

//let edad = 33 // harcodear un dato
let edadString = prompt('Ingrese su edad') // Siempre me va a devolver un string
let edad = Number(edadString) // * Castear (Convertir un tipo de dato a otro tipo de dato)

//debugger
if ( edad >= 18 && edad <= 80 ) {
    //debugger
    console.warn('Podes acceder al contenido')
} else {
    // debugger
    console.error('Olvidate papa! No podes tomarte un Whisky')
}





























