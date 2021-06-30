
import {datosCita,nuevaCita} from '../Funciones.js';
import {mascotaInput,propietarioInput,telefonoInput,fechaInput,horaInput,sintomasInput,formulario} from "./Selectore.js";

class App {

    cosntructor () {
       this.appinit();
    }

    appinit()
    {
        mascotaInput.addEventListener('change', datosCita);
        propietarioInput.addEventListener('change', datosCita);
        telefonoInput.addEventListener('change', datosCita);
        fechaInput.addEventListener('change', datosCita);
        horaInput.addEventListener('change', datosCita);
        sintomasInput.addEventListener('change', datosCita);
        document.querySelector('#borrar').addEventListener('click',eliminarlocal)
        formulario.addEventListener('submit', nuevaCita);
        document.addEventListener('DOMContentLoaded', () => {
            ctsa =JSON.parse( localStorage.getItem('citas') ) || []  ;
        
            if(ctsa.length >0)
                {
                    administrarCitas.cargardatos(ctsa);
                    ui.imprimirCitas(administrarCitas)
                }
                 
                    eventListeners();
                
        })
        
    }
}

export default App;
