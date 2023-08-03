console.log(document.querySelector('title').textContent)


// ! Tipos de datos primitivos

// string, number (int, float), boolean

// ! ¿Cómo creo una variable? Constructor de variable

// let (Variable) y const (Constante)

let nombre
nombre = 'Maxi'

const PI = 3.141592

// Entrada y salida (Métodos/funciones del BOM)

// window.alert('Mensaje') | Muestra mensaje en pantalla en un cuadro de dialogo
// window.prompt('Mensaje', "<valor-por-defecto") | Mensaje que solicita al usuario que ingrese un dato 
// window.confirm('Mensaje') | Es una forma de pedirle al usuario una confirmación. (Me ve a devolver un boolean (true/false))
// console.log('Mensaje') | Emite un mensaje de salida que se muestra en consola (devtools)

// ! ALERT
// alert('Mensaje')
// ! PROMPT
//let num = prompt('Ingrese un número', '10') // Siempre devuelve un string
// ! CONFIRM
// let res = confirm('Desea continuar?') // Devuelve true/false
// console.log(res)

// * Tengo diferentes métodos dentro del objeto del DOM (document)

/*
? document.getElementById('ID') | Retorna el único con ID.
? document.getElementsByClassName('CLASS') | Retorna una lista de elementos que concuerdan con el nombre de la clase (Nos devuelve un HTMLCollection) | Y lo manipulamos como si fuera un array.
? document.getElementsByTagName('TAG') | Retorna una lista de elementos que concuerdan con el nombre de la clase (Nos devuelve un HTMLCollection) | Y lo manipulamos como si fuera un array.
? ---------------------------
? document.querySelector('SelectorCSS') | Retorna el primer elemento que coincida con el selector. La sintaxis en la misma de CSS. 
? document.querySelectorAll('SelectorCSS') | Retorna una lista de elementos que coincida con el selector cuya sintaxis es igual a la de CSS. | Retorna un NodeList | Y lo manipulamos como si fuera un array.
? ---------------------------
? document.createElement('tag') | Crea un elemento html por código.
*/

//                0       1     2        3         4
let colors = [ 'red', 'gold', 'blue', 'purple', 'green', 'yellow' ]
let colores = [ 'rojo', 'dorado', 'azul', 'purpura', 'verde', 'amarillo' ]

console.log(colores)

/* for (let i = 0; i < colors.length; i++) {
    console.log(` ${colores[i]} = ${colors[i]}`)
} */

const listaColores = document.getElementById('lista-colores') // ? div#listaColores
// console.log(listaColores) // OK

const ul = document.createElement('ul') // ? <ul></ul>
// console.log(ul)

// debugger
for (let i = 0; i < colors.length; i++) {
    const li = document.createElement('li') // ? <li></li>
    // console.log(li)
    li.textContent = colores[i] // ? <li>color</li>
    // debugger
    li.style.color = colors[i]
    // console.log(li)
    ul.appendChild(li) // <ul><li></li></ul>
    // console.log(` ${colores[i]} = ${colors[i]}`)
}

console.dir(ul) // ? <ul><li>color1</li><li>color2...</li></ul>
/* for (let i = 0; i < ul.children.length; i++) {
    console.log(ul.children[i])
    ul.children[i].style.color = colors[i]
} */

// debugger

listaColores.appendChild(ul) // ? <div><ul></ul></div>

















