// Desestructuración con alias
const author: {firstName: string, lastName: string, age: number} = {firstName: "John", lastName: "cordoba", age: 15};
const {firstName: name1} = author
console.log(author);

// arreglos o arrays "{}"
const nums = [5,7,3,9,1];
const [num1, num2, num3, num4,  num5] = nums; // dariamos nombre a cada valor del array;

// arreglos, omitir elemento 
const tls = ["alex", "juan", "johana", "lesli"];
const [tl1 , , tl2] = tls; // estariamos omitiendo a "juan"
console.log(tl1);
console.log(tl2);

// desestructuracio anidada 
const response = {mesasge: "ok",
    ip: `123.345.1.2.`,
    data: {first: "gabito", second: "marquez"}}
const {data: {first}} = response;
console.log(response.data.second);
console.log(first);