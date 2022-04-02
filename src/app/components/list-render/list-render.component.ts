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

  animalDetails: string = '';

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  ngOnInit(): void {}

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal): void {
    this.animals = this.animals.filter((a) => animal.name !== a.name);
    this.listService.remove(animal.id).subscribe();
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
