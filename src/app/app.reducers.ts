/***
 * Interafaz que tendrá el estado centralizado.
 */

import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todos/models/todo.model';
import { filtroReducer } from './filtro/filtro.reducers';
import { filtrosValidos } from './filtro/filtro.actions';
import { todoReducer } from './todos/todo.reducers';

export interface AppState {
  todos: Todo[],
  filtro: filtrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer
}
