import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {NewItem} from 'src/app/clases/clases';
import { CrudService } from 'src/app/service/crud.service';
import {listas} from 'src/app/global/global';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  fecha: String = "";
  item:NewItem;

  sec_pc_1:boolean = true;
  sec_pc_2:boolean = true;
  sec_pc_3:boolean = true;

  listaCategorias = listas.categorias;
 

  constructor() { 
    this.item =  new NewItem;
  }

  ngOnInit(): void {
  }

}
