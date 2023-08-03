console.log(document.querySelector('title').textContent)

/* 
<tr>
    <td>Sol</td>
    <td>Torres</td>
</tr>
<tr>
    <td>Leila</td>
    <td>Romero</td>
</tr>
<tr>
    <td>Franco</td>
    <td>Carril</td>
</tr>
<tr>
    <td>Jeronimo</td>
    <td>Vega</td>
</tr>

*/

const solTorres = { nombre: 'Sol', apellido: 'Torres'}
const leilaRomero = { nombre: 'Leila', apellido: 'Romero'}
const francoCarril = { nombre: 'Franco', apellido: 'Carril'}
const jeronimoVega = { nombre: 'Jeronimo', apellido: 'Vega'}

//                        0           1             2             3
const arrayPersonas = [solTorres, leilaRomero, francoCarril, jeronimoVega]

console.log(arrayPersonas)

console.log(arrayPersonas[2].apellido) // Apellido de Franco

console.log(arrayPersonas[0].apellido)// Apellido de Sol

console.log(arrayPersonas[1]) // El objeto leilaRomero

console.log(arrayPersonas[1].nombre) // El nombre de Leila

console.warn('-------------------------------------------')

const tbody = document.querySelector('tbody')
console.log(tbody)

/* 
<tr>
    <td>Sol</td>
    <td>Torres</td>
</tr>
*/

/* for (let i = 0; i < arrayPersonas.length; i++) {
    // crear un tr
    const tr = document.createElement('tr') // creo el elemento
    // crear td para el nombre
    const nombre = document.createElement('td')
    nombre.textContent = arrayPersonas[i].nombre
    // crear td para el apellido
    const apellido = document.createElement('td')
    apellido.textContent = arrayPersonas[i].apellido

    // appendChild todos los td dentro del tr
    tr.appendChild(nombre)
    tr.appendChild(apellido)
    // appendChild tr en el tbody
    console.log(tr)
    debugger
    tbody.appendChild(tr)
} */


// Mejor forma de interactuar con el DOM

// https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment

// Creo un fragmento

const fragmento = new DocumentFragment(); /* <></> */
// console.log(fragmento)
// console.dir(fragmento)

for (let i = 0; i < arrayPersonas.length; i++) {
    // crear un tr
    const tr = document.createElement('tr') // creo el elemento
    // crear td para el nombre
    
    const nombre = document.createElement('td')
    nombre.textContent = arrayPersonas[i].nombre
    // crear td para el apellido
    const apellido = document.createElement('td')
    apellido.textContent = arrayPersonas[i].apellido

    // appendChild todos los td dentro del tr
    tr.appendChild(nombre)
    tr.appendChild(apellido)
    // appendChild tr en el tbody
    console.log(tr)
    debugger
    fragmento.appendChild(tr)
}
debugger
tbody.appendChild(fragmento)
 







let html = ''

/* for (let i = 0; i < arrayPersonas.length; i++) {
   html += ` 
    <tr>
        <td>${arrayPersonas[i].nombre}</td>
        <td>${arrayPersonas[i].apellido}</td>
    </tr>
`
} */

/* tbody.innerHTML = html  */
//console.log(html)
