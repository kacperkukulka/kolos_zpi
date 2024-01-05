import { Component } from '@angular/core';
import { AnimalService } from '../animal.service';
import { Animal } from 'src/model/animal';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent {
  animal: Animal = {
    id: 0,
    age: 0,
    name: ""
  }

  constructor(private service: AnimalService){}

  submitMethod(){
    this.service.put(this.animal).subscribe();
  }
}
