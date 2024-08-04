export class Pc {
    protected ram: number;
    protected almacenamiento: number;
    protected procesador: string;
    protected tarjetaGrafica: string;

    constructor(ram: number, almacenamiento: number, procesador: string, tarjetaGrafica: string) {
        this.ram = ram;
        this.almacenamiento = almacenamiento;
        this.procesador = procesador;
        this.tarjetaGrafica = tarjetaGrafica;
    };

    gretting():void {
        console.log(`El Pc #1 tiene: ${this.ram}GB de Ram, ${this.almacenamiento}GB  de almacenamiento, su procesador es: ${this.procesador} y tiene una tarheta gráfica ${this.tarjetaGrafica}`)
    };
}