import {Component, Input, OnInit} from '@angular/core';
import {AmbienteService} from '../../ambiente/ambiente.service';

@Component({
  selector: 'app-pedido-footer',
  templateUrl: './pedido-footer.component.html',
  styleUrls: ['./pedido-footer.component.css']
})
export class PedidoFooterComponent implements OnInit {

  @Input() pedido;

  constructor(public ambiente:AmbienteService) { }

  ngOnInit() {
  }

}
