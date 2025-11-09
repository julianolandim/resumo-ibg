import {Component, Input, OnInit} from '@angular/core';
import {AmbienteService} from '../../ambiente/ambiente.service';

@Component({
  selector: 'app-pedido-header1',
  templateUrl: './pedido-header1.component.html',
  styleUrls: ['./pedido-header1.component.css']
})
export class PedidoHeader1Component implements OnInit {

  cabecalho_relatorio = '/assets/cabecalho_relatorio.png';

  @Input() margem;

  constructor(public ambiente:AmbienteService) { }

  ngOnInit() {
  }

}
