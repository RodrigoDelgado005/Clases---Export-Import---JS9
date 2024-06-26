// Exporta la clase Calculadora con los metodos
export default class Calculadora{
    // Método para multiplicar dos números
    multiplicar(a, b){
        return a * b;
    }

    // Método para dividir dos números;
    dividir(a, b){
        if(b === 0){
            return 'no se puede dividir por 0'; // Muestra un mensaje si b es 0
        }else{
            return a / b; // Mustra el resultado de la división si b no es 0
        }
    }
}
