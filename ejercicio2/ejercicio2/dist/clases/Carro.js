export class Carro {
    constructor(marca, modelo, color, propietario) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.propietario = propietario;
    }
    ;
    gretting() {
        console.log(`El carro #1 es: ${this.marca}, modelo: ${this.modelo}, color: ${this.color} y su propietario es: ${this.propietario}`);
    }
    ;
}
