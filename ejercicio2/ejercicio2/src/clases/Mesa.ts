export class Mesa {
    protected forma: string;
    private sillas: number;
    protected flores: boolean;
    private mantel: boolean;
    

    constructor(forma: string, sillas: number, flores: boolean, mantel: boolean) {
        this.forma = forma;
        this.sillas = sillas;
        this.flores = flores;
        this.mantel = mantel;
    };

    gretting():void {
        console.log(`La mesa #1 tiene una forma: ${this.forma}, tiene ${this.sillas} sillas, tiene flores? ${this.flores}, y tiene mantel? ${this.mantel}`)
    };
}