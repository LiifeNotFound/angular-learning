import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input('description') description: String;
  @Input('dateTime') dateTime: Date;
  @Input('listItem') listItem: Boolean;
}
