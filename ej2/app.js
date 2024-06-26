import Persona from './personas.js'; // Importa la clase Persona desde el archivo personas.js

// Crea instancias de Personas
const persona1 = new Persona("Ana", 30); 
const persona2 = new Persona("Carlos", 25);

// Llama al método mostrarInformacion() de la instancia persona1 y muestra los datos
persona1.mostrarInformacion(); 
persona2.mostrarInformacion();