import {Component, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todos: any;
  @Input() filterMode: any;
  @Input() filtredValues:any;
  @Output() deleteEvent : EventEmitter<string>= new EventEmitter<string>();
  @Output() updateCheckBoxValues : EventEmitter<any> = new EventEmitter();


  constructor() {}

  deleteTodoPoint(todoText: string) {
      this.deleteEvent.emit(todoText)
  }

  updateCheckBoxValue(todo:any,value:boolean) {
     const obj :object={text:todo.text,done:value}
     this.updateCheckBoxValues.emit(obj);
  }



}
