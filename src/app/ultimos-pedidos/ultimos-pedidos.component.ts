import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {UltimosPedidosService} from './ultimos-pedidos.service';
import {AmbienteService} from '../ambiente/ambiente.service';
import {MenuLateralComponent} from '../barra-navegacao/menu-lateral/menu-lateral.component';
import {MenuLateralService} from '../barra-navegacao/menu-lateral/menu-lateral.service';

@Component({
  selector: 'app-ultimos-pedidos',
  templateUrl: './ultimos-pedidos.component.html',
  styleUrls: ['./ultimos-pedidos.component.css']
})
export class UltimosPedidosComponent implements OnInit,OnDestroy {


  ultimosPedidos
  inscricao;
  erro = false;
  isCarregado = false;
  menuLateralComponent ;


  constructor(
      private ultimosPedidosService:UltimosPedidosService,
      private ambiente:AmbienteService,
      private menuLateralService: MenuLateralService

  ) { }

  ngOnInit() {
    this.ambiente.validaLogin();
    this.inscricao = this.ultimosPedidosService.getUltimosPedidos().subscribe(dados => this.ultimosPedidos=dados,
        erro => this.erro=true, ()=>this.isCarregado=true);
    this.menuLateralComponent = this.menuLateralService.menuLateralCompoment

  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }




}
