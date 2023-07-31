console.log(document.querySelector('title').textContent)

// ! Operadores Lógicos

// * Operador AND (&&) [Conjunción -y-] 

/* TABLAS VERDAD */

/* Va ser verdad solamente cuando ambas premisas se cumplan */
// --------------------
//  p  AND  q   =>  x 
// --------------------
//? v  &&   v   =>  v (Solo si ambas se cumple, va a ser verdadera)
//  v  &&   f   =>  f
//  f  &&   v   =>  f
//  f  &&   f   =>  f

// * Operador OR (||) [Diyunción -o-] 

/* En el único caso que va a ser falso es cuando ambas no se cumple */
// --------------------
//  p  OR  q   =>  x 
// --------------------
//  v  ||   v   =>  v 
//  v  ||   f   =>  v
//  f  ||   v   =>  v
//? f  ||   f   =>  f (Si ambas no se cumplen, va a ser falso)

// * Operador NOT (!) [Lo contrario]

// p => !p
// v => !v => f
// f => !f => v
// boolean
// !true => false
// !false => true

const hoyHayClases = true
console.log(hoyHayClases) // true
console.log(!hoyHayClases) // Negando hoyHayClases => false








