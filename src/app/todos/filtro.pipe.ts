import { Pipe, PipeTransform } from '@angular/core';

import { Todo } from './models/todo.model';
import { filtrosValidos } from '../filtro/filtro.actions';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  // La transformación va a retornar un arreglo de Todo[]
  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {

    switch(filtro){
      case filtrosValidos.COMPLETADOS:
        return todos.filter( todo => todo.completado);
      case filtrosValidos.PENDIENTES:
        return todos.filter( todo => !todo.completado);
      default:
        return todos;
    }
  }

}
