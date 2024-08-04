// Exercise 1
const btnEvenOdd = document.querySelector("#btnEvenOdd") as HTMLButtonElement;
btnEvenOdd.addEventListener("click", (e) => {
    e.preventDefault();
    evenOdd(10);
});

function evenOdd(e:number = 0):void {
    if (e % 2 == 0) {
        alert(`the number: ${e} is even(par)`);
    } else {
        alert(`the number: ${e} is odd(impar)`);
    }
};

// Exercise 2
const btnName = document.querySelector("#btnName") as HTMLButtonElement;
btnName.addEventListener("click", (e) => {
    e.preventDefault();
    names();
});

function names ():void  {
    const name: string | null = prompt(`enter your name`);
    if (name != null) {
        alert(`Hello, welcome ${name}!`);
    } else {
        alert("inválid")
}};

// Exercise 3
const btnAge = document.querySelector("#btnAge") as HTMLButtonElement;
btnAge.addEventListener("click", (e) => {
    e.preventDefault();
    age();
});

function age():void {
    let ageUser:number = 10;
    if (ageUser < 18) {
        alert(`Your age is ${ageUser}, you're a MINOR`);
    } else {
        alert(`Your age is ${ageUser}, you're an ADULT`);
    }
};

// Exercise 4
const btnWeek = document.querySelector("#btnWeek") as HTMLButtonElement;
btnWeek.addEventListener("click", (e) => {
    e.preventDefault();
    weekend();
});

function weekend():void {
    const day: string | null = prompt("Ingresa un día de la semana (por ejemplo, lunes(1), martes(2), miercoles (3), etc.):");
    
    if (day === null) {
        alert("Invalid");
        return;
    };

    const dayUser:number = parseInt(day);

    let mensaje;

    switch (dayUser) {
        case 1:
            mensaje = "Today is monday!";
            console.log(mensaje);
            break;
        case 2:
            mensaje = "Today is tuesday!";
            console.log(mensaje);
            break;
        case 3:
            mensaje = "Today is wednesday!";
            console.log(mensaje);
            break;
        case 4:
            mensaje = "Today is thursday!";
            console.log(mensaje);
            break;
        case 5:
            mensaje = "Today is friday!";
            console.log(mensaje);
            break;
        case 6:
            mensaje = "Today is saturday!";
            console.log(mensaje);
            break;
        case 7:
            mensaje = "Today is sunday!";
            console.log(mensaje);
            break;
        default:
            mensaje = "Invalid day";
            console.log(mensaje);
            break;
    }
};

// Exercise 5
const btnNacionality = document.getElementById("btnNacionality") as HTMLButtonElement;
btnNacionality.addEventListener("click", (e) => {
    e.preventDefault();
    nacionality();
});

function nacionality():void {
    const country: string | null = prompt("Enter your nacionality");
     
    if (country == null) {
        alert("Invalid, please enter your nacionality")
        return
    }

    const nacionality = country.toString().toLowerCase();

    nacionality =="colombiano" || nacionality =="colombiana" ? alert("You are native") : alert("You are a foreigner")

    // switch (nacionality) {
    //     case "colombiano" || "colombiana":
    //         alert("You are native")
    //         break;
    
    //     default:
    //         alert("You are a foreigner")
    //         break;
    // }
};

// Exercise 6
const btnNum = document.getElementById("btnNum") as HTMLButtonElement;
btnNum.addEventListener("click", (e) => {
    e.preventDefault();
    number();
});

function number() {
    const num1: string | null = prompt("Enter number #1");
    const num2: string | null = prompt("Enter number #1");
    const num3: string | null = prompt("Enter number #1");
    
    if (num1 == null || num2 == null || num3 == null) {
        alert("Invalid, please enter all numbers");
        return
    };
    
    const number1:number = parseInt(num1);
    const number2:number = parseInt(num2);
    const number3:number = parseInt(num3);

    if (number1 > number2 && number1 > number3) {
        alert(`The number: ${number1} is the biggest`);
    } else if (number2 > number1 && number2 > number3) {
        alert(`The number: ${number2} is the biggest`);
    } else {
        alert(`The number: ${number3} is the biggest`);
    }
};

// Exercise 7
const btnPassword = document.querySelector("#btnPassword") as HTMLButtonElement;
btnPassword.addEventListener("click", (e) => {
    e.preventDefault();
    password();
});

function password() {
    const passW = prompt("Enter a password");

    passW != null && passW != "" ? alert("Your password has been accepted") : alert("Invalid, please write a password");
};

