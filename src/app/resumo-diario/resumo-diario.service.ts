import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResumoDiarioService {

  constructor(private http:HttpClient) { }


  getResumoDiario(){
    return this.http.post(environment.apiUrl+"/resumo-diario",null);
  }

}
