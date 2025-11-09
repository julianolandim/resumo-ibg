import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResumoService {

  constructor(private http:HttpClient) { }

  getResumos(){
    return this.http.post(environment.apiUrl+"/resumo", null);
  }
}
