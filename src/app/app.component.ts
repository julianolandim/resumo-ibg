import {Component, OnInit} from '@angular/core';
import {MenuLateralService} from './barra-navegacao/menu-lateral/menu-lateral.service';
import {AmbienteService} from './ambiente/ambiente.service';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit{
  title = 'resumo-ibg';

  constructor(
    private ambiente:AmbienteService
  ){}


  ngOnInit(){
    this.ambiente.validaLogin();
  }

}




