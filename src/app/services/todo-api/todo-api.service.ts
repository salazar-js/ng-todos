import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  /** RETURN ALL TODOS TASKS */
  getTodos(): Promise<any> {
    return this.http.get('url').toPromise();
  }

  /** CREATE A NEW TODO */
  createTodo(text: string): Promise<any> {
    return this.http.post('url', {
      // OBJETO QUE RECIBIRA EL SERVICIO
    }).toPromise();
  }

  /** CREATE A NEW TODO */
  updateTodo(id: number, data: TodoInterface) {
    return this.http.put('url', {
      // OBJETO QUE RECIBIRA EL SERVICIO
    }).toPromise();
  }

  /** CREATE A NEW TODO */
  removeTodo(id: number) {
    return this.http.delete('url', )
  }
}
