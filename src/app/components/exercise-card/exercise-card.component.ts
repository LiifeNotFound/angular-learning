import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.css'],
})

export class ExerciseCardComponent{
  @Input('imgSrc') imgSrc: string;
  @Input('title') title: string;
  @Input('description') description: string;
  @Input('url') url: string;
}
