import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-painel-simples',
  templateUrl: './painel-simples.component.html',
  styleUrls: ['./painel-simples.component.css']
})
export class PainelSimplesComponent implements OnInit {

  @Input() titulo;
  @Input() tipo = 'primary';
  @Input() col;



  constructor() { }

  ngOnInit() {
  }



}
