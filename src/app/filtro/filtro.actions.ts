import { createAction, props } from '@ngrx/store';

export enum filtrosValidos {
  TODOS = 'todos',
  COMPLETADOS = 'completados',
  PENDIENTES = 'pendientes'
}

export const setFiltro = createAction('[Filtro] Set Filtro',
    // argumento
    props<{filtro: filtrosValidos}>()
);
