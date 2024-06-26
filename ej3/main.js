import Calculadora from './calculadora.js'; // Importa la clase Calculadora desde el archivo calculadora.js

const calculadora = new Calculadora(); // Crea la instancia de la clase Calculadora

// Muestra por consola la multiplicacion y la division 
console.log(calculadora.multiplicar(6, 7)); // 42
console.log(calculadora.dividir(10, 2)); // 5
console.log(calculadora.dividir(10, 0)); // No se puede dividir por cero
