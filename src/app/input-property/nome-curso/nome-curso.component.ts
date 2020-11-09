import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nome-curso',
  templateUrl: './nome-curso.component.html',
  styleUrls: ['./nome-curso.component.scss']
})
export class NomeCursoComponent implements OnInit {

  @Input() nomeCurso: string = "";
  @Input('subtitulo') subtitle: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
