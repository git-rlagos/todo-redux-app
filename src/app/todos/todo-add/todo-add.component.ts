import * as actions from '../todo.actions';

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  // Control
  txtInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('', Validators.required);
    //this.store.select('todos').subscribe(todos => this.todos = todos);
  }

  ngOnInit(): void {
  }

  agregar(){

    if(this.txtInput.invalid){ return; }

    // Disparo acción
    this.store.dispatch(actions.crear({texto: this.txtInput.value}));

    this.txtInput.reset();
  }

}
