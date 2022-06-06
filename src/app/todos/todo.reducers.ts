import * as actions from './todo.actions';

import { createReducer, on } from '@ngrx/store';

import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar traje Iroman'),
  new Todo('Robar escudo del Capitán América'),
];

export const todoReducer = createReducer(
  estadoInicial,
  // No se puede usar push en array porque se puede MUTAR el estado.
  // Se recomienda obtener todos los estados y agregar un nuevo objeto al array.
  on(actions.crear, (state, {texto}) => [...state, new Todo(texto)]),
  on(actions.toggle, (state, {id}) => {
    // maps retorna un nuevo arreglo mapeando cada nodo:
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    return state.map(todo => {

      if(todo.id === id){
        return {
          ...todo,  // Extraeme todos los datos del objeto
          completado: !todo.completado // pero en completado ten esto.
        }
      }else{
        return todo;
      }

    });
  }),
  on(actions.editar, (state, {id, texto}) => {
    return state.map(todo => {

      if(todo.id === id){
        return {
          ...todo,  // Extraeme todos los datos del objeto
          texto: texto // pero en completado ten esto.
        }
      }else{
        return todo;
      }
    });
  }),

  on(actions.borrar, (state, {id}) => state.filter( todo => todo.id !== id)),

  on(actions.toggleAll, (state, {completado}) => {
    return state.map(todo => {
        if(todo.completado !== completado){
          return {
            ...todo,
            completado: completado
          }
        }else{
          return todo;
        }
    });
  }),

  on(actions.limpia, (state) => state.filter( todo => !todo.completado)),

);
