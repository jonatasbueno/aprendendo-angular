import { Component, ElementRef, ViewChild } from '@angular/core';
import { ListService } from './list/list.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  @ViewChild('campoPersonagem') campoPersonagem!: ElementRef;
  personagens: string[];

  constructor(private listService: ListService) {
    this.personagens = this.listService.getPersons();
  }

  add() {
    this.listService.add(this.campoPersonagem.nativeElement.value);
    this.campoPersonagem.nativeElement.value = "";
  }

}
