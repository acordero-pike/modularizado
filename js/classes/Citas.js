// Classes
import {sincronizarStorage} from '../funciones.js'
import {ctsa} from './App.js';
let ctsp = []
class Citas {
    constructor() {
        this.citas = []
    }
    agregarCita(cita) {
        ctsp = [...ctsp ,cita]
        this.citas = [...this.citas, cita];
        sincronizarStorage(); //agregar un local storage
    }
    editarCita(citaActualizada) {
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita)
        ctsp = ctsa.map(cita => cita.id === citaActualizada.id ? citaActualizada : cita) // actualizar local storage
   
        sincronizarStorage(); 
       
    }

    eliminarCita(id) {
        this.citas = this.citas.filter( cita => cita.id !== id);
        ctsp = ctsa.filter(cita => cita.id !== id );
        sincronizarStorage();
    }
    cargardatos(arreglo)
    {
        this.citas= arreglo;
    }
}

export default Citas;
