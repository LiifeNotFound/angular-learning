import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  date: string;
  // functions
  handleCreateEdit(isDelete: boolean) {
    // check if action is a delete
    if (isDelete) {
    } else {
      alert(this.action);
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.date = new Date(this.user.BornDate).toISOString().substring(0, 10);
  }

  @Input() action: string;
  @Input() user: User;
}
