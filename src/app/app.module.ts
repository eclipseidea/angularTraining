import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { TodoMenuComponent } from './components/todo-menu/todo-menu.component';
import { TodoTextComponent } from './fragments/todo-text/todo-text.component';
import { SearchComponent } from './fragments/search/search.component';
import { RemainingComponent } from './fragments/remaining/remaining.component';
import { TodoListComponent } from './fragments/todo-list/todo-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateTaskComponent } from './fragments/create-task/create-task.component';
import { CleanElementsComponent } from './fragments/clean-elements/clean-elements.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoMenuComponent,
    TodoTextComponent,
    SearchComponent,
    RemainingComponent,
    TodoListComponent,
    CreateTaskComponent,
    CleanElementsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
