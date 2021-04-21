import { Component, Input, OnChanges } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnChanges {
  date: string;
  SERVER_URL: string = 'http://localhost:3001';
  // functions
  handleCreateEdit(isDelete: boolean) {
    // check if action is a delete
    if (isDelete) {
      alert('User deleted');
    } else {
      switch (this.action) {
        case 'Create':
          // Make patch to user
          this.http
            .post<number>(this.SERVER_URL + `/users/`, {
              country: 1,
              username: $('#username').val(),
              image: 'default',
              name: $('#name').val(),
              surname: $('#surname').val(),
              bornDate: $('#bornDate').val(),
              phone: Number.parseInt($('#phone').val()),
              password: '12341234',
            })
            .subscribe((val) => {
              if (val['err'] && val['err'] == 'ER_DUP_ENTRY') {
                alert('Username is aleardy in use');
              } else {
                alert('User created');
              }
            });

          break;
        case 'Edit':
          // Make patch to user
          this.http
            .patch<number>(this.SERVER_URL + `/users/` + this.user.ID, {
              country: 1,
              username: $('#username').val(),
              image: 'default',
              name: $('#name').val(),
              surname: $('#surname').val(),
              bornDate: $('#bornDate').val(),
              phone: Number.parseInt($('#phone').val()),
              password: '12341234',
            })
            .subscribe((val) => console.log(val));

          alert('User updated');
          break;
      }
    }
  }

  /**
   * Component constructor
   * @param http httpclient
   */
  constructor(private http: HttpClient) {}

  ngOnChanges() {
    if (this.action != 'Create') {
      this.date = new Date(this.user.BornDate).toISOString().substring(0, 10);
    }
  }

  @Input() action: string;
  @Input() user: User;
}
