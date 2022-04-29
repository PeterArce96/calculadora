'use strict';
const documentReady = () => {
    const formCalculadora = document.getElementById('formCalculadora');
    
    //el scope del evento es solo en su funcion
    const calcular = (event) => {
        event.preventDefault();
        
        //se convierten a numeros porque son string
        const numero1 = parseInt (document.getElementById('numero1').value);
        const operador = document.getElementById('operador').value;
        const numero2 = parseInt (document.getElementById('numero2').value);
        const contenedorResultado = document.getElementById('contenedorResultado');
        

        //es O porque se tienen que completar los 2, si uno es vacío, sería falso y se activaría la alerta.
        //evento isNaN para que no se pueda dividir numero1 / numero2 sin haber puesto el numero1 porque estaría convirtiendo un entero a un dato que no se ha ingresado (NaN).
        if (isNaN(numero1) || isNaN(numero2)){
            contenedorError.innerHTML = 'Completar el formulario';
        }else{
            let resultado = 0;
            contenedorError.innerHTML = '';
            switch(operador){
                case '+':
                    resultado = (numero1 + numero2);
                    break;
                case '-':
                    resultado = (numero1 - numero2);
                    break;
                case '*':
                    resultado = (numero1 * numero2);
                    break;
                case '/':
                    if (numero1 === 0 || numero2 === 0){
                        contenedorError.innerHTML = 'Los operadores no pueden ser cero'; 
                       
                    }else {
                        resultado = (numero1 / numero2);
                    }

                    
                    break;
                default:
                    contenedorError.innerHTML = 'Seleccionar una operacion valida';
                    break;
            }
            contenedorResultado.innerHTML = 'El resultado es : ' + resultado;
        }
        // console.log(typeof numero1);
        // console.log(typeof operador);
        // console.log(typeof numero2);
       
    };//hasta aquí
    
    formCalculadora.addEventListener('submit', calcular);
}

document.addEventListener('DOMContentLoaded', documentReady);