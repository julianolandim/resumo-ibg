import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pedido-header2',
  templateUrl: './pedido-header2.component.html',
  styleUrls: ['./pedido-header2.component.css']
})
export class PedidoHeader2Component implements OnInit {


  @Input() codPed;
  @Input() dtFinalizacao;
  @Input() cliNom;
  @Input() repNom;
  @Input() pedStaLib;
  @Input() pedDatPrevEnt;
  @Input() pedTipVen;
  @Input() endereco;
  @Input() nroEndereco;
  @Input() bairroEndereco;
  @Input() cepEndereco;
  @Input() cidade;
  @Input() uf;
  @Input() cnpj;
  @Input() insEstadual;
  @Input() contato;
  @Input() cargoContato;
  @Input() tel1;
  @Input() tel2;
  @Input() tel3;
  @Input() fax;
  @Input() isCliNovo;
  @Input() nroOrdemCompra;

  constructor() { }

  ngOnInit() {
  }

}
