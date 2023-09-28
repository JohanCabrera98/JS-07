function solicitud(datos) {

    console.log('Funcion no asincrona');
    return new Promise(resolve => setTimeout(resolve,datos));  //Para declarar un nuevo objeto, se usa la palabra reservada "New" seguido de la palabra con la inicial en mayuscula
    
}


async function f(){ //modo de declarar una función asincrona
    console.log('Inicio de funcion asincrona');

    await solicitud(2000); //Espera lo siguiente, esto solo es posible si nuesra funcion es asincrona

    console.log('Terminamos de ejecutar la función asincrona');
}

function bigFunction() {
    console.log('Funcion normal ejecutada');
    let result = 0;
    for(let i=0;i<1e7;i++){
        result +=i;
   }
   console.log('Funcion normal terminada', result);
}

//f();
//bigFunction();

const COUNTER_P =document.getElementById('counter');
let counter = 0;

document.getElementById('button-counter')
.addEventListener('click', async (e) =>{
    await setTimeout(() => {
        counter++;
        COUNTER_P.textContent = counter;
      },1000);

})




