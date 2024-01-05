import { Component } from '@angular/core';
import { AnimalService } from '../animal.service';
import { AnimalPost } from 'src/model/animal_post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  animalNew: AnimalPost = {
    age: 0,
    name: ''
  }

  constructor(private service: AnimalService) {}

  submitMethod(){
    this.service.post(this.animalNew).subscribe();
  }
}
