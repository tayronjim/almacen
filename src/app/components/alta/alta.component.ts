import { Binary } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {NewItem} from 'src/app/clases/clases';
import { CrudService } from 'src/app/service/crud.service';
import {listas} from 'src/app/global/global';


@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})

export class AltaComponent implements OnInit {

  idItem:String = "";
  fechaAlta!:Date;

  fecha: String = "";
  anio:any;
  mes:any;
  dia:any;
  hora:any;
  minuto:any;

  sec_pc_1:boolean = false;
  sec_pc_2:boolean = false;
  sec_pc_3:boolean = false;

  inventatio:object = {};

  item:NewItem;

  listaCategorias = listas.categorias;

  constructor(private crudService:CrudService) { 
    this.item =  new NewItem;
    
  
  }

  ngOnInit(): void {
    this.sec_pc_1 = this.sec_pc_2 = this.sec_pc_3 = false;

    
    
  }

  guardar(){
    
    this.item.fechaAlta = new Date();
    this.anio = this.item.fechaAlta.getUTCFullYear(); //año
    this.mes = this.item.fechaAlta.getUTCMonth() + 1; //mes
    this.dia = this.item.fechaAlta.getUTCDate(); //dia
    this.hora = this.item.fechaAlta.getUTCHours() - 5; //hora
    this.minuto = this.item.fechaAlta.getUTCMinutes(); //minuto
    this.fecha = this.anio + "-" + ("0"+this.mes).slice(-2) + "-" + ("0"+this.dia).slice(-2) + "T" + ("0"+this.hora).slice(-2) + ":" + ("0"+this.minuto).slice(-2);

    //2021-08-03T16:45
    
    console.log(this.fecha);
    console.log(this.item.fechaAlta);
    //this.crudService.newItem(this.item).subscribe();
  }

  fnSlcCategoria(nuevaCategoria:any){

    console.log(nuevaCategoria.target.value);
    console.log(this.fecha);

    this.sec_pc_1 = false;
    this.sec_pc_2 = false;
    this.sec_pc_3 = false;

    switch(nuevaCategoria.target.value){
      
      case "0": this.sec_pc_1 = true; this.sec_pc_2 = true; break;
      case "1":
      case "2":
      case "3": this.sec_pc_1 = true; this.sec_pc_3 = true; break;
      
    }


  }

}
