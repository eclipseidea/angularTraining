import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  @Output() addTodoEvent : EventEmitter<any> = new EventEmitter();

  inputField :string ='';

  constructor() { }

  createTask() {
    if(this.inputField){
      const todo = {text:this.inputField,done:false};
      this.addTodoEvent.emit(todo)
      this.inputField ="";
    }
  }


}
