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
  //vars
  usersList: Observable<User[]>;
  SERVER_URL: string = 'http://localhost:3001';

  //paggination
  page: number = 1;
  pageLimit: number = 4;
  totalRecords: number = 0;

  fetchUsers() {
    this.usersList = this.http.get<User[]>(this.SERVER_URL + '/users/1/4');
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchUsers();
  }
}
