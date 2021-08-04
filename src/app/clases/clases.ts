export class NewItem{
    statusItem:any;
    nombreItem!: String
    idItem: any
    fechaAlta: Date = new Date();
    categoria: any
    descripcion: any
    pcdescr1: pcdescr1 = new pcdescr1
    pcdescr2: pcdescr2 = new pcdescr2
    pcdescr3: pcdescr3 = new pcdescr3
}

class pcdescr1{
    marcaItem: any
    modeloItem: any
    serieItem: any
}

class pcdescr2{
    cpuItem: any
    ramItem: any
    ddCapacidad: any
    ddTipo: any
    pantallaTamano: any
}

class pcdescr3{
    tipoTinta: any
    modeloTinta: any
    tamanoPapel: any
    conRed: any
    infoRed: any
}