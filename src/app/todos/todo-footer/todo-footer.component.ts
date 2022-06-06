import * as actions from '../../filtro/filtro.actions';

import { Component, OnInit } from '@angular/core';

import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { limpia } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  //Propiedades
  filtroActual: actions.filtrosValidos;
  filtros: actions.filtrosValidos[] = [];
  pendientes: number = 0;

  constructor(private store: Store<AppState>) {
    this.filtroActual = actions.filtrosValidos.TODOS;
    this.filtros.push(actions.filtrosValidos.TODOS);
    this.filtros.push(actions.filtrosValidos.PENDIENTES);
    this.filtros.push(actions.filtrosValidos.COMPLETADOS);

  }

  ngOnInit(): void {
    // this.store.select('filtro').subscribe(filtro =>
    //   this.filtroActual = filtro
    // )

    this.store.subscribe(state => {
        this.filtroActual = state.filtro;
        this.pendientes = state.todos.filter(todo => !todo.completado).length;
    });

    console.log(this.filtros);
  }

  cambiarFiltro(filtro: actions.filtrosValidos){
    this.store.dispatch(actions.setFiltro({filtro: filtro}));
  }

  limpiarCompletados(){
    this.store.dispatch(limpia());
  }
}
