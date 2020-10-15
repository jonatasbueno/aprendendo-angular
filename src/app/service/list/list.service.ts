import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  personagens: string[];

  constructor() {
    this.personagens = ["Kakashi Hatake", "Naruto Uzumaq", "Sasuke Uchiha", "Sakuera Haruno"]
  }

  add(personagem: string) {
    this.personagens.push(personagem);
  }

  getPersons() {
    return this.personagens;
  }
}
