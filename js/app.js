import App  from './Clases/App.js'
   import ctsa  from './Clases/Selectore.js'
document.addEventListener('DOMContentLoaded', () => {
            ctsa =JSON.parse( localStorage.getItem('citas') ) || []  ;
        
            if(ctsa.length >0)
                {
                    administrarCitas.cargardatos(ctsa);
                    ui.imprimirCitas(administrarCitas)
                }
                 
                    eventListeners();
                
        })

const app = new App();
