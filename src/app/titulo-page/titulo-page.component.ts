import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-titulo-page',
  templateUrl: './titulo-page.component.html',
  styleUrls: ['./titulo-page.component.css']
})
export class TituloPageComponent implements OnInit {

  @Input() titulo;


  constructor() { }

  ngOnInit() {
  }



}
