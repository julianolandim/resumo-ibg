import {Component, Input, OnInit} from '@angular/core';
import {AmbienteService} from '../../ambiente/ambiente.service';

@Component({
  selector: 'app-pedido-corpo',
  templateUrl: './pedido-corpo.component.html',
  styleUrls: ['./pedido-corpo.component.css']
})
export class PedidoCorpoComponent implements OnInit {

  constructor(private ambiente:AmbienteService) { }

  @Input() pedidoItens;

  ngOnInit() {
  }

}
