export class Mesa {
    constructor(forma, sillas, flores, mantel) {
        this.forma = forma;
        this.sillas = sillas;
        this.flores = flores;
        this.mantel = mantel;
    }
    ;
    gretting() {
        console.log(`La mesa #1 tiene una forma: ${this.forma}, tiene ${this.sillas} sillas, tiene flores? ${this.flores}, y tiene mantel? ${this.mantel}`);
    }
    ;
}
