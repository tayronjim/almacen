import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {

  public listaCategorias = [
    {ID:0, nombre:"Computadoras"},
    {ID:1, nombre:"Impresoras"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
