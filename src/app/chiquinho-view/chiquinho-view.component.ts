import {Component, OnDestroy, OnInit} from '@angular/core';
import {ChiquinhoViewService} from './chiquinho-view.service';
import {MenuLateralService} from '../barra-navegacao/menu-lateral/menu-lateral.service';
import {AmbienteService} from '../ambiente/ambiente.service';

@Component({
  selector: 'app-chiquinho-view',
  templateUrl: './chiquinho-view.component.html',
  styleUrls: ['./chiquinho-view.component.css']
})
export class ChiquinhoViewComponent implements OnInit, OnDestroy {


  menuLateralComponent;
  erro= false;
  isCarregado= false;
  totais ;
  inscricao;

  constructor(
    private chiquinhoViewService:ChiquinhoViewService,
    private menuLateralService:MenuLateralService,
    private ambiente:AmbienteService) { }

  ngOnInit() {

    this.ambiente.validaLogin();
    this.menuLateralComponent = this.menuLateralService.menuLateralCompoment;

    this.inscricao = this.chiquinhoViewService.geTotais().subscribe(
      dados => this.totais = dados,
      erro => this.erro=true,
      ()=> this.isCarregado=true
    )

  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }


}
