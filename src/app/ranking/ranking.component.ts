import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuLateralService} from '../barra-navegacao/menu-lateral/menu-lateral.service';
import {RankingService} from './ranking.service';
import {AmbienteService} from '../ambiente/ambiente.service';


@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit, OnDestroy{


  menuLateralComponent;
  inscricao;
  erro = false;
  isCarregado = false;
  ranking;
  totalVendasGeral = 0;

  constructor(public menuLateralService:MenuLateralService,
              protected rankingService:RankingService,
              public ambiente:AmbienteService) { }


  ngOnInit() {
      this.ambiente.validaLogin();
      this.menuLateralComponent = this.menuLateralService.menuLateralCompoment;
      this.inscricao =  this.rankingService.getRanking()
        .subscribe(
          dados => {
            this.ranking = dados;
            this.calcularTotalVendas();
          },
          erro => this.erro = true,
          () => this.isCarregado = true
        );

  }

  calcularTotalVendas() {
    if (this.ranking && this.ranking.totais && this.ranking.totais.totaVendasAnualPorRepresList) {
      const total = this.ranking.totais.totaVendasAnualPorRepresList
        .reduce((total, repres) => total + repres.totalVendasDoRepres, 0);
      this.totalVendasGeral = parseFloat(total.toFixed(2));
    }
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }


}
