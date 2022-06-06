import { Component, OnInit } from '@angular/core';

import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { filtrosValidos } from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  // Propiedad del componente
  todos: Todo[] = [];
  filtroActual!: filtrosValidos;

  constructor(private store: Store<AppState>) {
    // subscribe( ({}) =>          : Se le llama desestructuración al ({xxx,xx})
    this.store.subscribe(({todos, filtro}) => {
        this.todos = todos;
        this.filtroActual = filtro;
    });
  }

  ngOnInit(): void {
  }

}
