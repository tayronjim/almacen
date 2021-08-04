import { Injectable } from '@angular/core';
import {NewItem} from '../clases/clases';
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
    let API_URL = `${this.REST_API}/registraritem`;
    return this.httpClient.post(API_URL,item);
  }
}
