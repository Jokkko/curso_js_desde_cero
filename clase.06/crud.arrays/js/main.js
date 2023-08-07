console.log(document.querySelector('title').textContent)

/* ------------------------------------------------ */
/* CRUD: CREATE | READ | UPDATE | DELETE            */
/* ABM: ALTA BAJA MODIFICACIÓN                      */
/* ------------------------------------------------ */

console.warn('\n/*** CRUD: CREATE | READ | UPDATE | DELETE ***/')

/* CREATE (Agregar un elemento) */
/* READ ALL (Voy a leer todos los elementos del array) */
/* READ ONE (Voy a leer un elemento del array) */
/* UPDATE (Modificar un elemento del array) */
/* DELETE (Elimina un elemento del array) */

/* APB (Apruebo de Boludos) */
/* APNB (Apruebo de NO Boludos) */


let datos = [] /* base de datos */

/* READ ALL: Voy a leer todos los elementos del array */
function listarElementos() {
    console.log(datos)
}


/* CREATE: (Agregar un elemento) */
function agregarElemento(elemento) {
    //debugger
    /* if ( typeof elemento !== 'undefined') { */
        datos.push(elemento)
    /* } */
}

listarElementos()
agregarElemento('manzana')
agregarElemento('naranja')
agregarElemento('limón')
agregarElemento('mandarina')
listarElementos()

/* READ ONE: Voy a leer un elemento del array */
function listarElemento(indice) {
  /*   if ( indice >= 0 && indice < datos.length) { */
        console.log(datos[indice])
    /* } else {
        console.error('índice inválido')
    } */
}

listarElemento(2)
listarElemento(0)
listarElemento(3)
/* listarElemento(-4)
listarElemento(10) */


/* UPDATE (Modificar un elemento del array) */
function actualizarElemento(indice, nuevoElemento) {
    datos[indice] = nuevoElemento
}

actualizarElemento(2, 'pera')
listarElementos()

/* DELETE (Elimina un elemento del array) */
function eliminarElemento(indice) {
    datos.splice(indice, 1)
}

eliminarElemento(2)
eliminarElemento(1)
listarElementos()




















