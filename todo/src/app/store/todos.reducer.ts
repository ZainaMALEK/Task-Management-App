import { ActionReducerMap, Action } from '@ngrx/store';
import { Todo } from '../todo.model';

export interface TodoState {
 datas: Todo[];
}

const initialState ={
  datas: [{
    message:'manger une pizza',
    done: false
  }]
}

export function todosReducer( state : TodoState = initialState, action: Action ) : TodoState {
  console.log(state);
  console.log(action);


  return state;
}

