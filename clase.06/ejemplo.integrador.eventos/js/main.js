console.log(document.querySelector('title').textContent)

const botones = document.querySelectorAll('button')
// console.log(botones)

/* botones[0].addEventListener('click', function() {
    botones[0].style.backgroundColor = 'blue'
    console.log('Hicieron click sobre mi, botón 1')
})

botones[1].addEventListener('click', function() {
    botones[1].style.backgroundColor = 'red'
    console.log('Hicieron click sobre mi, botón 2')
})

botones[2].addEventListener('click', function() {
    botones[2].style.backgroundColor = 'green'
    console.log('Hicieron click sobre mi, botón 3')
})

botones[3].addEventListener('click', function() {
    botones[3].style.backgroundColor = 'yellow'
    console.log('Hicieron click sobre mi, botón 4')
}) */

const contenedor = document.querySelector('#contenedor')
// console.log(contenedor)

contenedor.addEventListener('click', function(objetoEvento) { /* e, ev, evt, event, evento */
    /* console.log('Hicieron click', objetoEvento) */
    console.dir(objetoEvento)
    if (objetoEvento.target.id !== 'contenedor') {
        console.warn('Hicieron click sobre los botones')
        console.dir(objetoEvento.target)
        // debugger
        objetoEvento.target.style.backgroundColor = objetoEvento.target.dataset.color || 'purple'
    } 
})