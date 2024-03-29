export const secret_number = 30
export let name = 'my math module';

export let x = 30, y = 100;

function add(x, y){
    return x + y
}

function substract(x, y){
    return x - y
}

function multiply(x, y){
    return x * y
}

function divide(x, y){
    return x / y
}

class Math {
    double(x){
        return x * x
    }
}

export default name; //Podemos exportar por defecto cualquier cosa de este archivo, así si la sintaxis usada para importar es muy general solo le pasamos el expor default y no todo lo que hay en el archivo