
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
        
    }
}

export default App;
