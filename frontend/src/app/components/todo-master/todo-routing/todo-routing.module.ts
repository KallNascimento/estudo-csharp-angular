import { NgModule } from '@angular/core';
import { TodoMasterComponent } from '../todo-master.component';
import { TodoGuard } from 'src/app/guards/todo.guard';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: TodoMasterComponent },
  { path: 'new', component: TodoFormComponent, resolve: { todo: TodoGuard } },
  { path: 'edit/:id', component: TodoFormComponent, resolve: { todo: TodoGuard } },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
