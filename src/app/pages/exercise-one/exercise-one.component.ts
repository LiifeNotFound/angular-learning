import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-exercise-one',
  templateUrl: './exercise-one.component.html',
  styleUrls: ['./exercise-one.component.css'],
})
export class ExerciseOneComponent implements OnInit {
  // vars
  usersList: Observable<User[]>;
  SERVER_URL: string = 'http://localhost:3001';

  // paggination
  page: number = 1; // Current page
  pageLimit: number = 4; // Limit per page
  totalRecords: number = 0; // Total items

  // user edit
  userBtnAction: string = '';
  userToEdit: User;
  isAddUserButtonVisible: boolean = false;
  handleUserClick = ((action, user) => {
    this.userBtnAction = action;
    this.userToEdit = user;
  }).bind(this);

  /**
   * Function to add user
   */
  addUserButton() {
    this.userBtnAction = 'Create';
  }

  /**
   * Function to go to next page
   */
  nextPage() {
    // check the current page. It must be > 1
    if (this.page * this.pageLimit < this.totalRecords) {
      // decrement page
      this.page++;

      // Load users again
      this.fetchUsers();
    }
  }

  /**
   * Function to back to the previus page
   */
  previousPage() {
    // check the current page. It must be > 1
    if (this.page > 1) {
      // decrement page
      this.page--;

      // Load users again
      this.fetchUsers();
    }
  }

  /**
   * Function to get all users from database
   */
  fetchUsers() {
    this.http
      .get<number>(this.SERVER_URL + `/users/count`)
      .subscribe((val) => (this.totalRecords = val[0].count));

    // get all users and put them into a observable
    this.usersList = this.http.get<User[]>(
      this.SERVER_URL + `/users/${this.page}/${this.pageLimit}`
    );
  }

  /**
   * Component constructor
   * @param http HTTPClient
   */
  constructor(private http: HttpClient) {}

  /**
   * Component loader
   */
  ngOnInit(): void {
    /**
     * call fetUsers function to get all users
     */
    this.fetchUsers();
  }
}
