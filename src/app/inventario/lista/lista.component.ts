import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

export interface PeriodicElement {
  nombreItem: string;
  descripcion: string;
}

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaInventario implements OnInit {

  displayedColumns: string[] = ['posicion','edit','nombre', 'descripcion'];
  

  listado:any


  constructor(private crudService:CrudService) {

   }

  ngOnInit(): void {
    this.crudService.listaInventario().subscribe((res:any) => {
      console.log(res);
      this.listado = res;
      

    });
    
  }

  

}
