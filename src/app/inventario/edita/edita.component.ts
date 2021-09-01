import { Component, OnInit } from '@angular/core';
import { NewItem, NewItemAlmacen, Proveedores} from 'src/app/clases/clases';
import { CrudService } from 'src/app/service/crud.service';
import { listas } from 'src/app/global/global';
//import { info } from 'console';
import { miFuncion } from 'src/app/clases/control';

@Component({
  selector: 'app-edita',
  templateUrl: './edita.component.html',
  styleUrls: ['./edita.component.css']
})
export class EditInventario implements OnInit {

  id:String = "";
  categoria:String = "";
  idItem:String = "";
  statusItem:String = "";
  item:NewItem;
  almacen:NewItemAlmacen;
  proveedor:Proveedores;

  fecha: String = "";
  anio:any;
  mes:any;
  dia:any;
  hora:any;
  minuto:any;
  
  infoBase:any = {};
  pcdescr1:any = {};
  pcdescr2:any = {};
  pcdescr3:any = {};

  sec_pc_1:boolean = true;
  sec_pc_2:boolean = true;
  sec_pc_3:boolean = true;

  listaCategorias = listas.categorias;
  unidades = listas.unidad;
  almacenes = listas.almacenes;
  lotes = listas.lotes;
  
  miFuncion:miFuncion = new miFuncion();
 
  constructor( private crudeService:CrudService) { 
    this.item =  new NewItem;
    this.almacen = new NewItemAlmacen;
    this.proveedor = new Proveedores;
  }

  ngOnInit(): void {
    const id = "612d27730f75c99eb9e43c39";
    this.crudeService.buscaItem(id).subscribe((res:any) => {
      
      
      console.log(this.item);
      this.id = res._id;
      this.categoria = res.categoria
      this.idItem = res.idItem
      this.statusItem = res.statusItem

      this.fecha = this.miFuncion.fechaInput(this.item.infobase.fechaAlta);

      this.infoBase = res.infobase;
      this.pcdescr1 = res.pcdescr1;
      this.pcdescr2 = res.pcdescr2;
      this.pcdescr3 = res.pcdescr3;
    });
  }

  guardar(){
    this.item.categoria = this.categoria
    this.item.idItem = this.idItem
    this.item.statusItem = this.statusItem
    this.item.infobase = this.infoBase
    this.item.pcdescr1 = this.pcdescr1
    this.item.pcdescr2 = this.pcdescr2
    this.item.pcdescr3 = this.pcdescr3
    console.log(this.item);

    this.crudeService.actualizaItem(this.id, this.item).subscribe();

  }

}
