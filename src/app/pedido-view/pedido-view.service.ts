import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidoViewService {

  constructor(private http:HttpClient) { }


  public getPedido(codPedido){
    return this.http.post(environment.apiUrl+"/pedido/"+codPedido,null);
    console.log("codpedido "+codPedido);
  }

}
