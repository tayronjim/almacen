import { Component, OnInit, ViewChild } from '@angular/core';
import {NewItem, NewItemAlmacen, Proveedores} from 'src/app/clases/clases';
import {MatAccordion} from '@angular/material/expansion';
import { CrudService } from 'src/app/service/crud.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class AltaProveedor implements OnInit {

  @ViewChild(MatAccordion)accordion: MatAccordion;


  dataSource = ELEMENT_DATA;
  displayedColumns = ['Contactos'];
  expandedElement: PeriodicElement | null | undefined;

  proveedor:Proveedores;
  direccion:any = { }
  contactos:any = [{}]
  

  constructor(private crudService:CrudService) { 

    this.proveedor =  new Proveedores;
    this.accordion = new MatAccordion;

  }

  ngOnInit(): void {
    
  }

  append(){
    const nuevaLinea = {
      position: 1,
      name: 'Hydrogen',
      weight: 1.0079,
      symbol: 'H',
      description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
          atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
    }
    this.dataSource.push(nuevaLinea)
  }

  guardar(){
    this.proveedor.estatus = "nuevo";
    this.proveedor.dir = this.direccion
    this.proveedor.contacto = this.contactos
    this.crudService.newProv(this.proveedor).subscribe();
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  }, {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`
  }, 
];
