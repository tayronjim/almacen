import { Injectable } from '@angular/core';
import {NewItem,Proveedores} from '../clases/clases';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
//import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  // Node express API
  REST_API: string = 'http://localhost:8000';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  newItem(item:NewItem){
    let API_URL = `${this.REST_API}/api/items/registraritem`;
    return this.httpClient.post(API_URL,item);
  }

  listaInventario(){
    let API_URL = `${this.REST_API}/api/items/listadogral`;
    var listado = this.httpClient.get(API_URL); 
    console.log(listado);
    return listado;
  }

  buscaItem(id:string){
    console.log(id);
    let API_URL = `${this.REST_API}/api/items/infoitem`;
    return this.httpClient.post(API_URL,{id:id}); 
  }

  actualizaItem(id:any, item:NewItem){
    let API_URL = `${this.REST_API}/api/items/actualizaitem`;
    return this.httpClient.post(API_URL,{id:id, item:item});
  }

  newProv(prov:Proveedores){
    let API_URL = `${this.REST_API}/api/prov/registrarprov`;
    return this.httpClient.post(API_URL,prov);
  }
}
