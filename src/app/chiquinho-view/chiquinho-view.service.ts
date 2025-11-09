import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChiquinhoViewService {

  constructor(private http:HttpClient) { }


  setCodRep(codRep){
    localStorage.setItem("codRep",codRep);

  }

  getCorep(){
    return localStorage.getItem("codRep")
  }

  geTotais(){
    let codRep = this.getCorep();
    return this.http.post(environment.apiUrl+"/total-diario-por-repres/"+codRep,null);
  }

}
