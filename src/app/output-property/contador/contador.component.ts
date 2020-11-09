import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  @Input('valorInicial') valor: number = 0;
  @Output() valorAlterado = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  incrementa() {
    this.valor++;
    this.emiteValor();
  }

  decrementa() {
    this.valor--;
    this.emiteValor()
  }

  emiteValor() {
    this.valorAlterado.emit({ valor: this.valor })
  }

}
