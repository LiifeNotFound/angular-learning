import { Component } from '@angular/core';
import date from 'date-and-time';
declare var $: any;

/**
 * Component props
 */
@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise-two.component.html',
  styleUrls: ['./exercise-two.component.css'],
})

/**
 * Exports Exercise two class by default
 */
export class ExerciseTwoComponent {
  // Define todo var
  todoList: { id: number; date: String; description: string }[];

  // set the function to delete todo's
  delTodo(todo) {
    this.todoList = this.todoList.filter((val) => val.id != todo.id);
  }

  // set the function to handle submit events
  addTodo() {
    // get full date
    const dateTime = new Date($('#todoDate').val());

    // add new todo to the array
    this.todoList.push({
      id: Math.floor(Math.random() * 10_000),
      date: date.format(dateTime, 'DD/MM/YYYY [às] HH:mm'),
      description: $('#todoDescription').val(),
    });

    // return false
    return false;
  }

  /**
   * Class constructor
   */
  constructor() {
    // List of todo's
    this.todoList = [
      {
        id: Math.floor(Math.random() * 10_000),
        date: date.format(new Date(), 'DD/MM/YYYY [às] HH:mm'),
        description: 'Passear o meu cão',
      },
      {
        id: Math.floor(Math.random() * 10_000),
        date: date.format(new Date(), 'DD/MM/YYYY [às] HH:mm'),
        description: 'Ir para a escola de condução',
      },
      {
        id: Math.floor(Math.random() * 10_000),
        date: date.format(new Date(), 'DD/MM/YYYY [às] HH:mm'),
        description: 'Tomar vacina da gripe',
      },
      {
        id: Math.floor(Math.random() * 10_000),
        date: date.format(new Date(), 'DD/MM/YYYY [às] HH:mm'),
        description: 'Visitar o meu amigo no hospital',
      },
      {
        id: Math.floor(Math.random() * 10_000),
        date: date.format(new Date(), 'DD/MM/YYYY [às] HH:mm'),
        description: 'Festa na casa do meu colega',
      },
      {
        id: Math.floor(Math.random() * 10_000),
        date: date.format(new Date(), 'DD/MM/YYYY [às] HH:mm'),
        description: 'Ler o livro que comprei',
      },
    ];
  }
}
