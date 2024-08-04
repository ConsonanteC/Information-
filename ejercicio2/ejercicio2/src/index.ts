import { Person } from "./clases/Person.js";
import { Carro } from "./clases/Carro.js";
import { Pc } from "./clases/Pc.js";
import { Mesa } from "./clases/Mesa.js";

const person1 = new Person("Steven", "Zuluaga");
const person2 = new Person("James", "Rodriguez");

// console.log(person1.eat("hot dog"));
// console.log(person2.gretting());

const carro1 = new Carro("Nissan", "Skyline", "azul", "Hernan Jiménez");
console.log(carro1.gretting());

const pc1 = new Pc(8, 128, "Intel Core i7", "GeForce GTX 1660");
console.log(pc1.gretting());

const mesa1 = new Mesa("cuadrada", 2, true, false);
console.log(mesa1.gretting());

