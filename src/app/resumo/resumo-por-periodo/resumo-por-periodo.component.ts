import {Component, Input, OnInit, Pipe} from '@angular/core';



@Component({
  selector: 'app-resumo-por-periodo',
  templateUrl: './resumo-por-periodo.component.html',
  styleUrls: ['./resumo-por-periodo.component.css']
})
export class ResumoPorPeriodoComponent implements OnInit {

  @Input() titulo ;
  @Input() col;
  @Input() tipo;
  @Input() consultas;



  constructor() { }

  ngOnInit() {
  }


}
