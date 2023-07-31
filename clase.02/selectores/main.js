import './css/style.css'
console.log('Clase 2 - Selectores')

/*
OBJETOS

DOM => Document Object Model (document)

* document.write() Método para escribir en el documento html (NO RECOMENDADO)

* getElementById('id') => Me devuelve el primer elemento con ID que aparezca en la página, según corresponde.

* getElementByClassName('class') => Devuelve una lista de elementos que concuerden con el nombre de la clase indicada. (texto-rojo)

* getElementByTagName('tag') => Devuelve una lista de elementos que correspondan con la etiqueta elegida. (h1, div, strong)

* querySelector('Selector') // Devuelve el primer elemento que coincida con el selector cuya sintaxis es similar a css. ['.texto-rojo']

* querySelectorAll('Selector') // Devuelve una lista de elemento que coincida con el selector cuya sintaxis es similar a css. ['.texto-rojo']

*/

console.warn('\n/*** DOM => Document Object Model (document) ***/')

/* <h1 id="principal">Clase 02 - Selectores</h1> */
//console.log(document.children[0].children[1].children[0]) // El h1
//console.log(document.getElementById('principal')) // El h1

const h1Principal = document.getElementById('principal')
console.log(h1Principal)
console.dir(h1Principal) // <= Una radiografía a lo seleccionado
console.dir(h1Principal.textContent) 

h1Principal.textContent = 'Otra cosa...'

h1Principal.style.color = 'gold'
h1Principal.style.border = '1px solid red'
h1Principal.style.backgroundColor = 'violet'

// !getElementByClassName 

const especial = document.getElementsByClassName('especial')
console.log(especial)

console.log(especial.length) // cuantos elementos tenés

console.log(especial[2].textContent)

console.log(especial[0]) // Salame
console.log(especial[1]) // Jamón
console.log(especial[2]) // Bombones

especial[2].textContent = 'Pan'
especial[2].style.color = 'blue'
especial[2].style.border = '1px solid lightblue'

const jamon = especial[1]
console.log(jamon)
let textoJamon = especial[1].textContent
console.log(textoJamon) // => Jamón

jamon.style.color = 'pink'

/* Selecionar el ul (lista) */

const lista = document.querySelector('ul') // El primer ul que encuentre.
console.dir(lista)

/* createElement me permite crear un elemento de DOM */
const li = document.createElement('li') // li, h2, div, section
//console.log(li)
console.dir(li)
li.textContent = 'Manzana'
console.log(li)
/* Nos permite setear atributos a los elementos html */
li.setAttribute('class', 'color-dorado')
console.log(li)
/* appendChild nos agrega un elemento al padre (El padre es el ul y yo quiero un li) */
lista.appendChild(li)

/* Seleccionamos el parrafo para ponerle un estilo negrita */

const parrafo = document.querySelector('#parrafo')
console.dir(parrafo)

parrafo.classList.add('estilo-negrita')

console.log(parrafo.classList.contains('estilo-negrita')) // true o false

// !querySelectorALL para seleccionar todos los lis 

// const lis = document.querySelector('ul > li') // Solo el primero
const lis = document.querySelectorAll('ul > li') // Una de lis...
console.log(lis)

const manzana = lis[5]

/* Quito la clase color dorado del elemento li seleccionada */
manzana.classList.remove('color-dorado')

/* Selecionar el h2 con la clase picante */

/* const h2Picante = document.querySelector('.picante')
console.dir(h2Picante)

h2Picante.style.color = 'green' */



















































































































