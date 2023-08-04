console.log(document.querySelector("title").textContent);

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date */

/* 
    mostrar la fecha actual
    formato: 03/08/2023
*/

// selecionamos elemento/s dentro del DOM
const txt = document.getElementById("txt");
// console.log(txt)

// creamos nuestro objeto fecha
const fecha = new Date();
console.log(fecha); // veo un string.
console.dir(fecha); // Le saco una radiografía.

// obtener el número de día de mes
let diaMes = fecha.getDate();
console.log(diaMes); // 3 => 03
/* Tengo que concatenarle un 0 cuando el número es menor a 10 */
if (diaMes < 10) {
  diaMes = "0" + diaMes;
}
console.log(diaMes); // 03

// obtenemos el número de mes actual
/* 
    enero -> 0
    febrero -> 1
    diciembre -> 11
*/
let mes = fecha.getMonth() + 1;
console.log(mes); // 8
if (mes < 10) {
  mes = "0" + mes;
}
console.log(mes); // 08

// obtenemos el número de año
let anio = fecha.getFullYear();
console.log(anio);

// imprimimos
// txt.innerText = diaMes+ '/' +mes+ '/' +anio
txt.innerText = `${diaMes}/${mes}/${anio}`; // template string

/* ----------------------------------------------------------- */
/* ----------------------------------------------------------- */

/* Hora actual */
/* 
    mostrar hora
    formato: 09:35:41
*/

const txtHora = document.querySelector("#txtHora"); // querySelector <= selector css
// const txtHora = document.getElementById('txtHora')
// console.log(txtHora)

function getHora() {
  // creamos el objeto fecha
  let hora = new Date();

  // obtenemos el número de las horas
  let horas = hora.getHours();
  console.log({ horas }); // 14

  if (horas < 10) {
    horas = "0" + horas;
  }

  // obtenemos el número de los minutos
  let minutos = hora.getMinutes();
  console.log({ minutos }); // 54

  if (minutos < 10) {
    minutos = "0" + minutos;
  }

  // obtenemos el número de los segundos
  let segundos = hora.getSeconds();
  console.log({ segundos });
  
  if (segundos < 10) {
    segundos = "0" + segundos;
  }
  console.log({ segundos });

  // Inyectamos el reloj en el p
  //txtHora.textContent = horas+ ':' +minutos+ ':' +segundos
  txtHora.textContent = `${horas}:${minutos}:${segundos}`;
}

getHora() // invocando, llamando a la función

// La función setInterval sirve para actualizar el llamado a una función

setInterval( getHora ) // recibe una función como argumento