import {Component, OnDestroy, OnInit} from '@angular/core';
import {ResumoService} from '../resumo/resumo.service';
import {ResumoDiarioService} from './resumo-diario.service';
import {MenuLateralService} from '../barra-navegacao/menu-lateral/menu-lateral.service';
import {AmbienteService} from '../ambiente/ambiente.service';

@Component({
  selector: 'app-resumo-sete-dias',
  templateUrl: './resumo-diario.component.html',
  styleUrls: ['./resumo-diario.component.css']
})
export class ResumoDiarioComponent implements OnInit, OnDestroy{


  inscricao;
  resumos;
  erro = false;
  ternimouCarregar = false;
  menuLateralComponent;

  constructor(
    private resumoService:ResumoDiarioService,
    private menuLateralService:MenuLateralService,
    private ambiente:AmbienteService
  ) { }

  ngOnInit() {
    this.ambiente.validaLogin();
    this.inscricao = this.resumoService.getResumoDiario().subscribe(datos=> this.resumos = datos,
        erro => this.erro = true,()=>this.ternimouCarregar=true)
    this.menuLateralComponent = this.menuLateralService.menuLateralCompoment;
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }



}
