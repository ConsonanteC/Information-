export class Person {
    firstName: string;
    lastName: string;

    constructor (firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    gretting(): void {
        console.log(`Hello ${this.firstName}`);
    }
    
    eat(food: string): void {
        console.log(`${this.firstName} is eating ${food}`);
    }
}
