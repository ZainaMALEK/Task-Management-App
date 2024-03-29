import { Todo } from './../todo.model';
import { Action } from "@ngrx/store";

export const TODO_CREATE = '[todo] create';
export const TODO_DELETE = '[todo] delete';
export const TODO_TOGGLE = '[todo] toggle';

export class CreateTodo implements Action{
  readonly type = TODO_CREATE;
  constructor(public payload :Todo){

  }
}
export class DeleteTodo implements Action{
  readonly type = TODO_DELETE;
  constructor(public payload :Todo){

  }
}
export class ToggleTodo implements Action{
  readonly type = TODO_TOGGLE;
  constructor(public payload :Todo){

  }
}
