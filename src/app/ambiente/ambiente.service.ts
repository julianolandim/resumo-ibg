import { Injectable } from '@angular/core';
import {MenuLateralComponent} from '../barra-navegacao/menu-lateral/menu-lateral.component';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AmbienteService {

  constructor(private router:Router) { }


  logout(){
    localStorage.clear();
  }


  validaLogin() {
    if (window.location.pathname != "/login") { // nao validar se estiver na pagina de login
      if (localStorage.getItem("usuario") == null) {
        this.router.navigate(["/login"]);
      }
    }
  }


  convertValorBrToFloat(valor : string){
    let s = valor.replace(".","").replace(",",".");
    return parseFloat(s)
  }


  convertValorFloatToBr(valor){
      var inteiro = null, decimal = null, c = null, j = null;
      var aux = new Array();
      valor = ""+valor;
      c = valor.indexOf(".",0);
      //encontrou o ponto na string
      if(c > 0){
        //separa as partes em inteiro e decimal
        inteiro = valor.substring(0,c);
        decimal = valor.substring(c+1,valor.length);
      }else{
        inteiro = valor;
      }

      //pega a parte inteiro de 3 em 3 partes
      for (j = inteiro.length, c = 0; j > 0; j-=3, c++){
        aux[c]=inteiro.substring(j-3,j);
      }

      //percorre a string acrescentando os pontos
      inteiro = "";
      for(c = aux.length-1; c >= 0; c--){
        inteiro += aux[c]+'.';
      }
      //retirando o ultimo ponto e finalizando a parte inteiro

      inteiro = inteiro.substring(0,inteiro.length-1);

      decimal = parseInt(decimal);
      if(isNaN(decimal)){
        decimal = "00";
      }else{
        decimal = ""+decimal;
        if(decimal.length === 1){
          decimal = decimal+"0";
        }
      }


      valor = inteiro+","+decimal;


      return valor;
  }


  getAnoAtual(){
    var data = new Date();
    return data.getFullYear();
  }


  getDataAndHoraAtual(){
    var data = new Date();

    // obtem o dia, mes e ano
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();

    //obtem as horas, minutos e segundos
    var horas = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();

    //converte as horas, minutos e segundos para string
    var str_horas = new String(horas);
    var str_minutos = new String(minutos);
    var str_segundos = new String(segundos);

    //se tiver menos que 2 digitos, acrescenta o 0
    if (str_horas.length < 2)
      str_horas = "0" + str_horas;
    if (str_minutos.length < 2)
      str_minutos = "0" + str_minutos;
    if (str_segundos.length < 2)
      str_segundos = "0" + str_segundos;

    //converte o dia e o mes para string
    var str_dia = new String(dia);
    var str_mes = new String(mes);

    //se tiver menos que 2 digitos, acrescenta o 0
    if (str_dia.length < 2)
      str_dia = "0" + str_dia;
    if (str_mes.length < 2)
      str_mes = "0 "+ str_mes;

    return str_dia + '/' + str_mes + '/' + ano + '  ' + str_horas + ':' + str_minutos + ':' + str_segundos;
  }





}
