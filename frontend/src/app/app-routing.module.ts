import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user' },
  {
    path: 'todo',
    loadChildren: () => import('./components/todo-master/todo-routing/todo-routing.module').then(t => t.TodoRoutingModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./components/user-master/users-routing/users-routing.module').then(u => u.UsersRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
