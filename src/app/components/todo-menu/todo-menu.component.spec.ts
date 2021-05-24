import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoMenuComponent } from './todo-menu.component';

describe('TodoComponent', () => {
  let component: TodoMenuComponent;
  let fixture: ComponentFixture<TodoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
