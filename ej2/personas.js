// Exporta la clase Persona
export default class Persona{
    // Constructor de la clase Persona para inicializar nombre y edad
    constructor(nombre, edad){
        this.nombre = nombre;    
        this.edad = edad;    
    }

    // Método para mostrar la información de la persona por consola
    mostrarInformacion(){
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}