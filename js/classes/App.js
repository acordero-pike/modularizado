
import { datosCita, nuevaCita } from '../funciones.js';
import { mascotaInput, propietarioInput, telefonoInput, fechaInput, horaInput, sintomasInput, formulario } from '../selectores.js';
let ctsa = [];
class App {
    constructor() {
        this.initApp();
    }

    initApp() {
        // Eventos

        document.addEventListener('DOMContentLoaded', () => {
            ctsa =JSON.parse( localStorage.getItem('citas') ) || []  ;
        
            if(ctsa.length >0)
                {
                    administrarCitas.cargardatos(ctsa);
                    ui.imprimirCitas(administrarCitas)
                }
                 
                    eventListeners();
                
        }) 
        function eventListeners() {
            mascotaInput.addEventListener('change', datosCita);
            propietarioInput.addEventListener('change', datosCita);
            telefonoInput.addEventListener('change', datosCita);
            fechaInput.addEventListener('change', datosCita);
            horaInput.addEventListener('change', datosCita);
            sintomasInput.addEventListener('change', datosCita);

            // Formulario nuevas citas
            formulario.addEventListener('submit', nuevaCita);
        }

    }
}

export default App;