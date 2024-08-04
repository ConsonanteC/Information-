export class Pc {
    constructor(ram, almacenamiento, procesador, tarjetaGrafica) {
        this.ram = ram;
        this.almacenamiento = almacenamiento;
        this.procesador = procesador;
        this.tarjetaGrafica = tarjetaGrafica;
    }
    ;
    gretting() {
        console.log(`El Pc #1 tiene: ${this.ram}GB de Ram, ${this.almacenamiento}GB  de almacenamiento, su procesador es: ${this.procesador} y tiene una tarheta gráfica ${this.tarjetaGrafica}`);
    }
    ;
}
