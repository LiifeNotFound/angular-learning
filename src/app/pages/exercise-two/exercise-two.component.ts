import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise-two.component.html',
  styleUrls: ['./exercise-two.component.css']
})
export class ExerciseTwoComponent implements OnInit {
  todoList: object
  constructor() { 
    this.todoList = [
      {
        "date": Date.now(),
        "description": "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum",
        "isDone": true
      },
      {
        "date": Date.now(),
        "description": "askdaskmdmaklsdmaslkdmlkasdasdasdasLorem ipsum",
        "isDone": true
      },
      {
        "date": Date.now(),
        "description": "Lorem ipsorem ipsum",
        "isDone": true
      },
      {
        "date": Date.now(),
        "description": "Lom",
        "isDone": true
      },
      {
        "date": Date.now(),
        "description": "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLoKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK",
        "isDone": true
      },
      {
        "date": Date.now(),
        "description": "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum",
        "isDone": true
      }
    ]
  }

  ngOnInit(): void {
  }

}
