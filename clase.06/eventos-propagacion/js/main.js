/* const btns = document.querySelectorAll('button')

console.log(btns)


btns[0].addEventListener('click', function () {  
    btns[0].style.backgroundColor = 'blue'
    console.log('Me hicieron click, soy el boton uno')
})
 */

const cont = document.getElementById('contenedor')

cont.addEventListener('click',function(e){
    /* console.dir(objetoEvento.target) */
    if(e.target.id != 'contenedor'){
        console.log('Hicieron click en los botones  ')
        e.target.style.backgroundColor = e.target.dataset.color || 'violet'
    }
})