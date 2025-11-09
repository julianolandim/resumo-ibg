import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PedidoViewService} from './pedido-view.service';
import {MenuLateralService} from '../barra-navegacao/menu-lateral/menu-lateral.service';
import {AmbienteService} from '../ambiente/ambiente.service';

@Component({
  selector: 'app-pedido-view',
  templateUrl: './pedido-view.component.html',
  styleUrls: ['./pedido-view.component.css']
})
export class PedidoViewComponent implements OnInit,OnDestroy {

  menuLateralCompoent;
  pedido ;
  inscricao;
  erro = false;
  termindouCarregar = false;


  constructor(
      private route:ActivatedRoute,
      private pedidoViewService:PedidoViewService,
      private menuLateralSercive:MenuLateralService,
      private ambiente:AmbienteService
    ) { }

  ngOnInit() {

    this.ambiente.validaLogin();

    this.route.params.subscribe(parametros=>{
      if(parametros['id']){
        this.inscricao = this.pedidoViewService.getPedido(parametros['id']).subscribe(dados=>this.pedido=dados, erro=>this.erro=true,()=>this.termindouCarregar=true)
      }
    })

    this.menuLateralCompoent = this.menuLateralSercive.menuLateralCompoment;
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }



}
