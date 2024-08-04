// Operador Spread ( ... )
//Sirve para traer información de manera mas abreviada y combinar objetos "{}"
const user = {name:'valentina', address:'Avenida Colombia'};
const books = {books:['abs','1344']};

const body = {name: user.name,address:user.address,books: books.books};
const body2={...user,...books};
console.log(body2);

// copiar arrays
const ages = [1,2,3,4,5];
const ages2 = [...ages, 6,7,8 ] // lo copiamos y le agregamos ams valores

//combinar arrays 
const agescombined = [...ages, ...ages2]

// remplazar valores de objetos
const person = {name:'juan',age:60};
const update = {...person,age:59};
console.log(update);