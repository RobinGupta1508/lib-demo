import { Component } from '@angular/core';
import { TodoService } from '../../projects/todo/src/lib/todo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-lib';

  constructor(private todoService: TodoService){}
}
