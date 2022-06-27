// Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

// Eventos
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit', agregarGasto);
}

// Classes
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }
}

class UI{
    insertarPresupuesto( cantidad ){
        const { presupuesto, restante } = cantidad;
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo){
        // Crear el div
        const divMensaje = document.createElement('DIV');
        divMensaje.classList.add('text-center', 'alert');

        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertarlo en el HTML
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
}

// Instanciar
const ui = new UI();
let presupuesto;


// Funciones
function preguntarPresupuesto(){
    let presupuestoUsuario = Number( prompt('Cual es tu presupuesto?') );

    // Validacion de presupuesto ingresado
    while(presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario.length === 0 || parseInt(presupuestoUsuario) <= 0){
        presupuestoUsuario = prompt('Ingresa un presupuesto valido');
    }

    // Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);

    ui.insertarPresupuesto(presupuesto);
}

// Agrega gastos
function agregarGasto(e){
    e.preventDefault();

    // Leer los datos del formulario
    const nombre = document.querySelector('#gasto').value.trim();
    const cantidad = document.querySelector('#cantidad').value.trim();

    if(nombre === '' || cantidad === ''){
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');

        return;
    }else if (cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no valida', 'error');
        return;
    }

    console.log('Agregando Gasto');
}

