console.log(document.querySelector('title').textContent)

/* Acciones o sucesos que ocurren en una aplicación web. Que pueden ser detectados y manejados con JS. Los eventos pueden ser acciones usuarios, como también eventos generados por el navegador. */

/* https://developer.mozilla.org/es/docs/Web/Events */
/* https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events */

const btn = document.querySelector('#btn')
// console.log(btn)
//console.dir(btn)

/* btn.onclick = function() {
    console.log('Me hicieron click otra vez')
} */

function click() {
    console.log('Me hicieron click otra vez')
}

function clickDos() {
    console.log('Me hicieron click otra vez (2)')
}

btn.onclick = click // le asigno una referencia de una función

btn.onclick = clickDos

/* addEventListener */

const btnAddEl = document.getElementById('btnAddEl')
// console.log(btnAddEl)

// btnAddEl.addEventListener(<evento>, <callback>)
btnAddEl.addEventListener('click', function() {
    console.log('Clickeame ahora con el addEventListener')
})

btnAddEl.addEventListener('click', function() {
    console.log('Clickeame ahora con el addEventListener (2)')
})

btnAddEl.addEventListener('click', function() {
    console.log('Clickeame ahora con el addEventListener (3)')
})

btnAddEl.addEventListener('click', function() {
    console.log('Clickeame ahora con el addEventListener (4)')
})





