import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BarraNavegacaoService} from './barra-navegacao.service';

@Component({
  selector: 'app-barra-nagevacao',
  templateUrl: './barra-nagevacao.component.html',
  styleUrls: ['./barra-nagevacao.component.css']
})
export class BarraNagevacaoComponent implements OnInit {

  @Output() onToggle = new EventEmitter();

  btnToogleVisible = true;

  constructor(private barraNavegacaoService:BarraNavegacaoService) { }

  ngOnInit() {
     this.barraNavegacaoService.barraNavegacaoComponent = this;
  }

  disparaEvento(){
    this.onToggle.emit();
  }

}
