"use strict";
function printUser(data) {
    console.log(data.name);
    console.log(data.email);
}
const milton = {
    name: 'Milton Loaiza',
    id: 55,
    phone: 'xxxx',
    email: 'milton.loaiza@riwi.io'
};
printUser(milton);
console.log(typeof milton);
function getOptionFamily(persons) {
    if (persons === 0) {
        return 'nadie';
    }
    else if (persons === 1) {
        return 55;
    }
    else if (persons > 1) {
        return [55, 56, 57];
    }
    else {
        return undefined;
    }
}
const resultFamily = getOptionFamily(-1);
if (typeof resultFamily === 'string') {
    console.error(`No encontrado: ${resultFamily}`);
}
else if (typeof resultFamily === 'number') {
    console.log(`Id individual: ${resultFamily}`);
}
else if (typeof resultFamily === 'object') {
    console.log(`Id de familia: ${resultFamily}`);
}
else {
    console.error(`Error: ${resultFamily}`);
}
console.log(resultFamily);
