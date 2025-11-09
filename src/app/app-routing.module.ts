import { NgModule } from '@angular/core';
import {ResumoComponent} from './resumo/resumo.component';
import {ResumoDiarioComponent} from './resumo-diario/resumo-diario.component';
import {RouterModule} from '@angular/router';
import {UltimosPedidosComponent} from './ultimos-pedidos/ultimos-pedidos.component';
import {PedidoViewComponent} from './pedido-view/pedido-view.component';
import {RankingComponent} from './ranking/ranking.component';
import {ChiquinhoViewComponent} from './chiquinho-view/chiquinho-view.component';
import {LoginComponent} from './login/login.component';

let routes=[
  {path : "resumo" , component : ResumoComponent},
  {path : "resumo-diario" , component : ResumoDiarioComponent},
  {path : "ultimos-pedidos" , component : UltimosPedidosComponent},
  {path : "pedido/:id", component:PedidoViewComponent},
  {path : "ranking", component:RankingComponent},
  {path : "ranking-ano-passado", component:RankingComponent},
  {path : "chiquinho", component : ChiquinhoViewComponent},
  {path :"login", component: LoginComponent},
  {path : "**" , redirectTo:"/resumo"}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
