export class Carro {
    private marca: string;
    private modelo: string;
    private color: string;
    private propietario: string;

    constructor(marca: string, modelo: string, color: string, propietario: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.propietario = propietario;
    };

    gretting():void {
        console.log(`El carro #1 es: ${this.marca}, modelo: ${this.modelo}, color: ${this.color} y su propietario es: ${this.propietario}`)
    };
}