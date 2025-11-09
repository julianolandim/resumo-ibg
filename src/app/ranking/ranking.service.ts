import {Injectable, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RankingService {

  @Input() titulo;
  constructor(private http:HttpClient) { }


  getAno(){

    return localStorage.getItem("ano");
  }

  setAno(ano){
    localStorage.setItem("ano",ano);
  }


  getRanking(){
      let ano = localStorage.getItem("ano");
      return this.http.post(environment.apiUrl+"/ranking/"+ano,null)

  }

}
