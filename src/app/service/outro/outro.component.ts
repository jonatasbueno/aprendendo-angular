import { Component } from '@angular/core';
import { ListService } from '../list/list.service';

@Component({
  selector: 'app-outro',
  templateUrl: './outro.component.html',
  styleUrls: ['./outro.component.scss']
})
export class OutroComponent {
  personagens: string[];

  constructor(private listService: ListService) {
    this.personagens = this.listService.getPersons();
  }

}
