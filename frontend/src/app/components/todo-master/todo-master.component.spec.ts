import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoMasterComponent } from './todo-master.component';

describe('TodoMasterComponent', () => {
  let component: TodoMasterComponent;
  let fixture: ComponentFixture<TodoMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
