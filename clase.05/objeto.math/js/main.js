console.log(document.querySelector('title').textContent)

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math

console.log(Math)

console.log(Math.PI)

// Math.abs(x): Devuelve el valor absoluto. O sea sin signo
console.log(Math.abs(-8))
console.log(Math.abs(12))
console.log(Math.abs(45))

// Math.ceil(x) // Rendondea hacia arriba al número entero más cercano
console.log(Math.ceil(3.6)) // 4
console.log(Math.ceil(3.5)) // 4
console.log(Math.ceil(3.2)) // 4
console.log(Math.ceil(3.1)) // 4

// Math.floor(x) Rendondea hacia abajo al número entero más cercano
console.log(Math.floor(3.6)) // 3
console.log(Math.floor(3.5)) // 3
console.log(Math.floor(3.2)) // 3
console.log(Math.floor(3.1)) // 3

// Math.random(): Devuelve un número pseudoaleatorio entre 0 (inclusive) y 1 (excluido)
// console.log(parseInt(Math.random() * 10))
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())

// Math.round(x): Redondea al número entero más cercano (x)
console.log(Math.round(3.6)) // 4
console.log(Math.round(3.1)) // 3
console.log(Math.round(3.9)) // 4
console.log(Math.round(3.5)) // 4
console.log(Math.round(3.4)) // 3

// Math.max([x[, y[, …]]]): Devuelve el valor más grande entre los números
console.log(Math.max(11, 14, 4, -5, 25, 58)) // 58
const array = [11, 14, 4, -5, 25, 58]
console.log(Math.max( ...array )) // 58
// Math.min([x[, y[, …]]]): Devuelve el valor más pequeño entre los números
console.log(Math.min(11, 14, 4, -5, 25, 58)) // -5
console.log(Math.min( ...array )) // -5



