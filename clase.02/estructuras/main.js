import './css/style.css'
console.log('Clase 2 - estructuras de decisión')

/* ------------------------------------------- */
/* Operadores aritmeticos                      */
/* ------------------------------------------- */
console.warn('\n/*** Operadores aritmeticos ***/')

let numero1 = 4
let numero2 = 2
let resultado = 0

/*
! Operador suma (+)
*/

resultado = numero1 + numero2
console.log({resultado}) // 4 + 2 = 6

/*
! Operador resta (-)
*/

resultado = numero1 - numero2
console.log({resultado}) // 4 - 2 = 2

/*
! Operador multiplicación (*)
*/

resultado = numero1 * numero2
console.log({resultado}) // 4 * 2 = 8

/*
! Operador división (/)
*/

resultado = numero1 / numero2
console.log({resultado}) // 4 / 2 = 2

/*
! Operador módulo (%) : Devuelve el resto de la divisón de un valor entre otro 
*/

resultado = numero1 % numero2 
console.log({resultado}) // 4 % 2 = 0

console.warn('Operadores comparación')

/* 
Los operadores de comparación me devuelve un booleano (true o false)

? Operador de igualdad estricta (===): Compara si 2 valores son iguales en valor y en tipo de dato (number, string, boolean)

*/

console.log('Resultado (===): ' + ( 2 === '2')) // false 
console.log('Resultado (===): ' + ( 3 === 3 )) // true

/* 
? Operador de igualdad (==): Compara si 2 valores son iguales solo en valor: NO EN TIPO DE DATO)

*/

console.log('Resultado (==): ' + ( 2 == '2')) // true
console.log('Resultado (==): ' + ( 3 == 3 )) // true

/* 
? Operador de desigualdad estricta (!==): Compara si 2 valores son iguales en valor y en tipo de dato (number, string, boolean)

*/

console.log('Resultado (!==): ' + ( 2 !== '2')) // true
console.log('Resultado (!==): ' + ( 3 !== 3 )) // false

/* 
? Operador de desigualdad (!=): Compara si 2 valores son distintos en valor: NO EN TIPO DE DATO)

*/

console.log('Resultado (!=): ' + ( 2 != '2')) // false
console.log('Resultado (!=): ' + ( 3 != 3 )) // false

/* 
? Operador de mayor (>): Compara si el primer valor es mayor que el segundo valor.

*/

console.log('Resultado (>): ' + ( 2 > 5 )) // false
console.log('Resultado (>): ' + ( 5 > 7 )) // false
console.log('Resultado (>): ' + ( 11 > 7 )) // true

/* 
? Operador de mayor (<): Compara si el primer valor es menor que el segundo valor.

*/

console.log('Resultado (<): ' + ( 2 < 5 )) // true
console.log('Resultado (<): ' + ( 5 < 7 )) // true
console.log('Resultado (<): ' + ( 11 < 7 )) // false


/* 
? Operador de mayor e igual (>=): Compara si el primer valor es mayor o igual que el segundo valor.

*/

console.log('Resultado (>=): ' + ( 2 >= 5 )) // false
console.log('Resultado (>=): ' + ( 5 >= 7 )) // false
console.log('Resultado (>=): ' + ( 11 >= 11 )) // true

/* 
? Operador de menor igual (<=): Compara si el primer valor es menor o igual que el segundo valor.

*/

console.log('Resultado (<=): ' + ( 2 <= 5 )) // true
console.log('Resultado (<=): ' + ( 5 <= 7 )) // true
console.log('Resultado (<=): ' + ( 3 <= 3 )) // true