import {Component} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-menu.component.html',
  styleUrls: ['./todo-menu.component.css']
})
export class TodoMenuComponent {

  todos: Array<any>;
  unchecked: Array<any>=[];
  filtredValues:Array<any>=[];


  filterMode:boolean=false;

  constructor() {
    this.todos = [
      {text: 'learn angular', done: true},
      {text: 'build an angular app', done: false},
      {text: 'modify', done: true},
      {text: 'test', done: false},
      {text: 'close', done: false}
    ];

    this.updateUnCheckedValue();
  }

  deleteTodoItem(todoText: string) {
    this.todos.reduceRight((_, n, i, a) => n.text === todoText && a.splice(i, 1), null);
    this.updateUnCheckedValue();
  }

  updateRemainingItems(todo: any) {
    let objIndex = this.todos.findIndex((obj => obj.text == todo.text));
    this.todos[objIndex].done = todo.done
    this.updateUnCheckedValue();
  }

  addTodoItem(todo:any) {
    this.todos.push(todo);
    this.updateUnCheckedValue();
  }

  updateUnCheckedValue(){
    this.unchecked = this.todos.filter(x => x.done === false);
  }

  cleanAllCheckedElements() {
    this.todos.reduceRight((_, n, i, a) => n.done === true && a.splice(i, 1), null);
  }

  filter(item: any) {
     this.filterMode=true;
     this.filtredValues = this.todos.filter(x => x.text.startsWith(item));
  }

  exitOfFilterMod() {
    this.filterMode=false;
  }
}
