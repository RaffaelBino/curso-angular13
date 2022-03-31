import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];

  // animals: Animal[] = [
  //   { name: 'Mel', type: 'Dog', age: 11 },
  //   { name: 'Ikki', type: 'Cat', age: 6 },
  //   { name: 'Lola', type: 'Cat', age: 4 },
  //   { name: 'Cristal', type: 'Cat', age: 2 },
  //   { name: 'Bob', type: 'Horse', age: 1 },
  // ];

  animal: Animal = {
    name: 'Teste',
    type: 'Alguma coisa',
    age: 0,
  };

  animalDetails: string = '';

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  ngOnInit(): void {}

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal): void {
    console.log('Removendo animal...');
    this.animals = this.listService.remove(this.animals, animal);
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => this.animals = animals);
  }
}
