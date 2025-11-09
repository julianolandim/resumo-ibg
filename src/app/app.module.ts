import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PainelSimplesComponent } from './painel-simples/painel-simples.component';
import { BarraNagevacaoComponent } from './barra-navegacao/barra-nagevacao.component';
import { MenuLateralComponent } from './barra-navegacao/menu-lateral/menu-lateral.component';
import { ResumoPorPeriodoComponent } from './resumo/resumo-por-periodo/resumo-por-periodo.component';
import { ResumoComponent } from './resumo/resumo.component';
import {AppRoutingModule} from './app-routing.module';
import {ResumoPorDiaComponent} from './resumo-diario/resumo-por-dia/resumo-por-dia.component';
import {ResumoDiarioComponent} from './resumo-diario/resumo-diario.component';
import { TituloPageComponent } from './titulo-page/titulo-page.component';
import { UltimosPedidosComponent } from './ultimos-pedidos/ultimos-pedidos.component';
import {ResumoService} from './resumo/resumo.service';
import {HttpClientModule} from '@angular/common/http';
import { AlertComponent } from './alert/alert.component';
import { LoadingComponent } from './loading/loading.component';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {ResumoDiarioService} from './resumo-diario/resumo-diario.service';
import {UltimosPedidosService} from './ultimos-pedidos/ultimos-pedidos.service';
import {AmbienteService} from './ambiente/ambiente.service';
import { PedidoViewComponent } from './pedido-view/pedido-view.component';
import { PedidoHeader1Component } from './pedido-view/pedido-header1/pedido-header1.component';
import { PedidoHeader2Component } from './pedido-view/pedido-header2/pedido-header2.component';
import { PedidoCorpoComponent } from './pedido-view/pedido-corpo/pedido-corpo.component';
import { PedidoFooterComponent } from './pedido-view/pedido-footer/pedido-footer.component';
import { RankingComponent } from './ranking/ranking.component';
import { ChiquinhoViewComponent } from './chiquinho-view/chiquinho-view.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    PainelSimplesComponent,
    BarraNagevacaoComponent,
    MenuLateralComponent,
    ResumoPorPeriodoComponent,
    ResumoComponent,
    ResumoPorDiaComponent,
    ResumoDiarioComponent,
    TituloPageComponent,
    UltimosPedidosComponent,
    AlertComponent,
    LoadingComponent,
    PedidoViewComponent,
    PedidoHeader1Component,
    PedidoHeader2Component,
    PedidoCorpoComponent,
    PedidoFooterComponent,
    RankingComponent,
    ChiquinhoViewComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    ReactiveFormsModule

  ],
  providers: [
    ResumoService,
    ResumoDiarioService,
    UltimosPedidosService,
    AmbienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
