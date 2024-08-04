export class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    gretting() {
        console.log(`Hello ${this.firstName}`);
    }
    eat(food) {
        console.log(`${this.firstName} is eating ${food}`);
    }
}
