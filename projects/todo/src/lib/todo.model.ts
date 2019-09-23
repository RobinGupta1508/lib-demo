/**
 * base interface for data containing individual todo.
 */
export class Todo {
    id:number = null;
    title:string = '';
    status: string = 'Active';
    selected: boolean = false;

  }