import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoFormComponent } from './components/todo-master/todo-form/todo-form.component';
import { TodoMasterComponent } from './components/todo-master/todo-master.component';
import { UserMasterComponent } from './components/user-master/user-master.component';
import { UsersFormComponent } from './components/user-master/users-form/users-form.component';
import { TodoGuard } from './guards/todo.guard';
import { UsersGuard } from './guards/users.guard';

const routes: Routes = [
  { path: "user", component: UserMasterComponent },
  { path: "todo", component: TodoMasterComponent },
  { path: 'new-todo', component: TodoFormComponent, resolve: { todo: TodoGuard } },
  { path: 'edit-todo/:id', component: TodoFormComponent, resolve: { todo: TodoGuard } },
  { path: 'new-user', component: UsersFormComponent, resolve: { user: UsersGuard } },
  { path: 'edit-user/:id', component: UsersFormComponent, resolve: { user: UsersGuard } },
  { path: "", pathMatch: 'full', redirectTo: "user" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
