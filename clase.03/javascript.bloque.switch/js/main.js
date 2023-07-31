console.log(document.querySelector("title").textContent);

/* 
! El switch es una estructura también de control que permite tomar decisiones en múltiples casos posibles. Un bloque switch  se utiliza para comparar una expresión en varios CASOS y ejecutar el bloque de código correspondiente.
*/

let numero = prompt("Ingrese un número entre (1 y 4)");
// Opción 1, Opción 2, Opción 3, Opción 4

//debugger
switch (numero) {
  case "1":
    //debugger
    console.log("El usuario ingreso la opción 1");
    break;
  case "2":
    //debugger
    console.log("El usuario ingreso la opción 2");
    break;
  case "3":
    console.log("El usuario ingreso la opción 3");
    break;
  case "4":
    console.log("El usuario ingreso la opción 4");
    break;

  default:
    /* En el caso que el usuario ingrese alguna opción no valida o no contemplada */
    console.log('Opción incorrecta')
    break;
}
console.log('FIN')