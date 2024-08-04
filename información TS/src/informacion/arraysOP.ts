// Array ops
/*
->filter(callback): Crea un nuevo array con los elementos que cumplen una condición.
->map(callback): Crea un nuevo array aplicando una transformación a cada elemento.
->reduce(callback, initialValue): Reduce el array a un único valor acumulado.
->forEach(callback): Ejecuta una función para cada elemento del array (sin crear un nuevo array).
->find(callback): Devuelve el primer elemento que cumple una condición.
->some(callback): Devuelve true si al menos un elemento cumple una condición.
->every(callback): Devuelve true si todos los elementos cumplen una condición.
*/

// Filter []
const numbersFortune = [1,2,3,4,5,6,7,8];
console.log(numbersFortune);
// Numeros pares
const evenNumbers = numbersFortune.filter(numberFortune => numberFortune % 2 === 0);
console.log(evenNumbers);

// Map []
const numbersMap = [1,2,3,4,5,6,7,8];
// Multiplicar por 2 cada elemento
const doubledNumbersMap = numbersMap.map(function(numberMap){
    return numberMap * 2 ;
});
console.log(doubledNumbersMap);

// Example filter and map
const users = [
    {name: 'Pepito', age: 10},
    {name: 'Zulca', age: 30},
    {name: 'Zuker', age: 20},
    {name: 'Tail', age: 10},
];
const usersUp30 = users.filter(user => user.age > 30);
console.log(usersUp30);
const onlyNames = users.map(user => user.name);
console.log(onlyNames);

// Reduce
const numbersReduce  = [1,2,3,4,5,6,7,8];
const sumNumberReduce = numbersReduce.reduce((acum, current) => acum + current, 0);
console.log(`La suma de ${numbersReduce} es= ${sumNumberReduce}`);

// forEach 
users.forEach(user => console.log(`Hola mi nombre es ${user.name}`));

// Find
const userUp20 = users.find(user => user.age > 100);
console.log(userUp20?.name);

// Some
const userZulca = users.some(user => user.name === 'Zulca');
if (userZulca){
    console.log('Si existe Zulca');
} else {
    console.log('No existe Zulca');
}

// Every
const allUsersUpEqual18 = users.every(user => user.age >= 18);
if (allUsersUpEqual18){
    console.log('Mayores, pueden acceder');
} else {
    console.log('No se permiten menores de edad');
}
