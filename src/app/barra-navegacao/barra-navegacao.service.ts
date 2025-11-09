import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BarraNavegacaoService {

  barraNavegacaoComponent;

  constructor() { }


  setBarraNavegacaoComponent(barraNavegacaoComponent){
    this.barraNavegacaoComponent = barraNavegacaoComponent;
  }

}
