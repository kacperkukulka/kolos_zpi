import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Animal } from 'src/model/animal';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent {
  @Input() animal!: Animal
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() {
    setTimeout(() => {
      this.newItemEvent.emit(`Hello ${this.animal.name}`);
    },1000)
  }
}
