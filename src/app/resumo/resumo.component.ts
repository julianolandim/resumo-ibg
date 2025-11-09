import {Component, OnDestroy, OnInit} from '@angular/core';
import {ResumoService} from './resumo.service';
import {MenuLateralService} from '../barra-navegacao/menu-lateral/menu-lateral.service';
import {AmbienteService} from '../ambiente/ambiente.service';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})
export class ResumoComponent implements OnInit, OnDestroy {

  resumos;
  inscricao;
  erro = false;
  ternimouCarregar = false;
  menuLateralComponent;

  constructor(
    private resumoService:ResumoService,
    private menuLaterallSerice:MenuLateralService,
    private ambiente:AmbienteService,
  ) {}



  ngOnInit() {
    this.ambiente.validaLogin();
    this.inscricao = this.resumoService.getResumos().subscribe(dados => this.resumos = dados, erro => this.erro = true,()=>this.ternimouCarregar = true)
    this.menuLateralComponent = this.menuLaterallSerice.menuLateralCompoment;
    this.menuLaterallSerice.menuLateralCompoment.toggleMenu();
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }



}


