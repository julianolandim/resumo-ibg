import {Component, Input, OnInit} from '@angular/core';
import {AmbienteService} from '../../ambiente/ambiente.service';

@Component({
  selector: 'app-resumo-por-dia',
  templateUrl: './resumo-por-dia.component.html',
  styleUrls: ['./resumo-por-dia.component.css']
})
export class ResumoPorDiaComponent implements OnInit {

  @Input() titulo;
  @Input() col;
  @Input() tipo;
  @Input() consultas;

  constructor(private  ambiente:AmbienteService) { }

  ngOnInit() {
  }

}
