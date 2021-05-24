import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanElementsComponent } from './clean-elements.component';

describe('CleanElementsComponent', () => {
  let component: CleanElementsComponent;
  let fixture: ComponentFixture<CleanElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleanElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
