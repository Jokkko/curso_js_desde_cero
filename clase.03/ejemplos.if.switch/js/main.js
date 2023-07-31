console.log(document.querySelector('title').textContent)

/* Dado un puntaje obtenido por un estudiante en un examen (valor númerico), escribir un programa que muestre la calificación correspondiente utilizando la estructura if-else. Teniendo en cuenta la tabla de calficaciones siguiente */

/* 
* 1-3 => desaprobado
* 4-6 => bien
* 7-8 => muy bien
* 9-10 => excelente
*/

/* let calificacion = ''

let nombreAlumno = prompt('Ingrese nombre del alumno')
let puntajeString = prompt('Ingrese la nota del alumno')

puntaje = Number(puntajeString)

if ( puntaje <= 3 ) {
    calificacion = 'desaprobado'
} else if ( puntaje <= 6 ) {
    calificacion = 'bien'
} else if ( puntaje <= 8 ) {
    calificacion = 'muy bien'
} else if ( puntaje <= 10 ) {
    calificacion = 'excelente'
} else {
    calificacion = 'fuera de rango'
}

console.log('--------------------------')
console.log('  Imprimiendo resultado')
console.log('--------------------------')
console.log(`La nota de ${nombreAlumno} es: ${puntaje}, está ${calificacion}`) */

/* ------------------------------------------------------------- */
/* ------------------------------------------------------------- */

/* Escribir un programa que solicite al usuario un número que represente un mes del año 1-12 y determine la cantidad de días que tiene ese mes. Utilizando una estructura de control switch para mostrar la cantidad de días que tiene ese mes. Si se ingresa un número fuera de rango, mostrar el mensaje. (Mes inválido) */

/* 
* 31 días: Enero, marzo, mayo, julio, agosto, octubre y diciembre.  
* 30 días: Abril, junio, septiembre y noviembre.
* 28 días: Febrero
*/

let nombreMes = ''
let cantidadDias = 0

let numeroMes = 12 // prompt
//              0          1
let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']

switch (numeroMes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        nombreMes = meses[numeroMes-1]
        cantidadDias = 31
        break;
    case 2:
        nombreMes = meses[numeroMes-1]
        cantidadDias = 28
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        nombreMes = meses[numeroMes-1]
        cantidadDias = 30
        break;
    default:
        cantidadDias = -1
        break;
}

if (cantidadDias < 0) {
    console.log('Dato invalido')
} else {
    console.log(`El mes de ${nombreMes} tiene ${cantidadDias}`)
}







