import { Component, OnInit } from '@angular/core';

interface Evento {
  valor: number;
}

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent implements OnInit {

  valorInicial: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  imprimiValor(evento: Evento) {
    console.log(evento.valor)
  }
}
