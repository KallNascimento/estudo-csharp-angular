import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoFormComponent } from './components/todo-master/todo-form/todo-form.component';
import { TodoMasterComponent } from './components/todo-master/todo-master.component';
import { UserMasterComponent } from './components/user-master/user-master.component';

const routes: Routes = [
  { path: "user", component: UserMasterComponent },
  { path: "todo", component: TodoMasterComponent },
  {path: "add", component: TodoFormComponent},
  { path: "", pathMatch: 'full', redirectTo: "user" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
