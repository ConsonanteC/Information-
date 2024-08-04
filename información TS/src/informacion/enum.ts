/* 
-> Definición: Los enums (enumeraciones) son una forma de definir un conjunto de constantes con nombres. En esencia, son una lista de opciones posibles para una variable.
*/

//Enum number
enum week {
    lun,
    mar,
    mie,
    jue,
    vie,
    sab,
    dom
}
const day = week.lun;
console.log(day); // imprimirá "1"
console.log(typeof day); // imprimirá tipo de dato "number"

//Enum string
enum weekStr {
    lun = 'lunes',
    mar = 'martes',
    mie = 'miercoles',
    jue = 'jueves',
    vie = 'viernes',
    sab = 'sabado',
    dom = 'domingo',
}
const dayStr = weekStr.lun;
console.log(dayStr); // imorimirá "lunes"
console.log(typeof dayStr);// imprimirá tipo de dato "string"

// Enums in functions
function printDay(dayToPrint: weekStr){
    console.log(dayToPrint);
}
printDay(weekStr.sab);


// ------------------------------ //
//Exports
// ----> shapes.ts
class Circle{
    constructor(public radius: number){}
    getArea(): number {
        return Math.PI * this.radius;
    }
}

class Square {
    constructor(public sideLength: number){}
    getArea(): number {
        return this.sideLength * this.sideLength;
    }
}

//Export multiple
export {Circle, Square}

// ---> main.ts
//      import {Circle, Square} from './shapes'

// Export (Reexportaciones)
// ------> index.ts
//      export * from './shapes'
//      export * from './versions'


// Export default
// ----------> user.ts
export default class User {
    constructor(public name: string){}
    getName(){
        return `Hola soy ${this.name}`;
    }
}

export function getTime(){
    return new Date();
}

// --------------> profile.ts
//      import User, {getTime} from './user'