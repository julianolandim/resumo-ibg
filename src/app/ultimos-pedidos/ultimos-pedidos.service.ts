import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UltimosPedidosService {


  constructor(private http:HttpClient) { }

  getUltimosPedidos(){
    const body = {}; // ou { parametro: 'valor' }
    return this.http.post(environment.apiUrl+"/ultimos-pedidos", body);
  }



}
