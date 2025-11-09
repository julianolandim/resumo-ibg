import { Component, OnInit } from '@angular/core';
import {AmbienteService} from '../../ambiente/ambiente.service';
import {MenuLateralService} from './menu-lateral.service';
import {RankingService} from '../../ranking/ranking.service';
import {ChiquinhoViewComponent} from '../../chiquinho-view/chiquinho-view.component';
import {ChiquinhoViewService} from '../../chiquinho-view/chiquinho-view.service';



@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  public menuAberto = true;

  constructor(
    public ambiente:AmbienteService,
    public menuLateralService: MenuLateralService,
    public rankingService:RankingService,
    public chiquinhoViewService:ChiquinhoViewService) { }


  ngOnInit() {
    this.toggleMenu();
    this.menuLateralService.menuLateralCompoment = this;
  }


  toggle(){
    this.menuAberto = !this.menuAberto;
  }

  public toggleMenu(){
    let winWidth = window.innerWidth;
    if(winWidth <= 767) {
      this.menuAberto = false;
    }else{
      this.menuAberto = true;
      //this.menuAberto = false;
    }
  }


}


