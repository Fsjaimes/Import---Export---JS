import  {
    secret_number as num1,  //Se puede exportar como un alias
    add as sumar,
    substract as restar,
    divide as dividir,
    name as nombre,
    x, 
    y

} from './math.js'

console.log(x)
console.log(y)

console.log(sumar(100, 20))
console.log(restar(100, 20))
console.log(dividir(100, 20))
console.log()

const math = new Math()
console.log(math.double(4))

console.log(nombre)

//SINTAXIS DE EXPORT

// export { name1, name2, …, nameN };
// export { variable1 as name1, variable2 as name2, …, nameN };
// export let name1, name2, …, nameN; // también var
// export let name1 = …, name2 = …, …, nameN; // también var, const
// export function FunctionName(){...}
// export class ClassName {...}

// export default expression;
// export default function (…) { … } // también class, function*
// export default function name1(…) { … } // también class, function*
// export { name1 as default, … };

// export * from …;
// export { name1, name2, …, nameN } from …;
// export { import1 as name1, import2 as name2, …, nameN } from …;
// export { default } from …;


