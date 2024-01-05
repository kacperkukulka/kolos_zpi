import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { Animal } from 'src/model/animal';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {
  animals: Animal[] = []

  constructor(private service: AnimalService){}

  ngOnInit(){
    this.service.getAll().subscribe(animal =>
      this.animals = animal
    )
  }

  deleteAnimal(id: number){
    this.service.delete(id).subscribe();
  }

  handleEvent(eventVal: string){
    console.log(eventVal);
  }
}
