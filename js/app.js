// Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

// Eventos
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
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

    console.log(presupuesto);
}

