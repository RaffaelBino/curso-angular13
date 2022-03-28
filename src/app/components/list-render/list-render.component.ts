import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals = [
    {name: 'Mel', type: 'Dog'},
    {name: 'Ikki', type: 'Cat'},
    {name: 'Lola', type: 'Cat'},
    {name: 'Cristal', type: 'Cat'},
    {name: 'Bob', type: 'Horse'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
