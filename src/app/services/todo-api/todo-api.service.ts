import { Injectable } from '@angular/core';

/** TODO TASK MODEL */
export interface TodoInterface {
  id?: number;
  title?: string;
  done?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor() { }

  /** RETURN ALL TODOS TASKS */
  getTodos() { }

  /** CREATE A NEW TODO */
  createTodo(text: string) {}

  /** CREATE A NEW TODO */
  updateTodo(id: number, data: TodoInterface) {}

  /** CREATE A NEW TODO */
  removeTodo(id: number) {}
}
