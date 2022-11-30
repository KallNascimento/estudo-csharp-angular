import { NgModule } from '@angular/core';
import { UsersGuard } from 'src/app/guards/users.guard';
import { UserMasterComponent } from '../user-master.component';
import { UsersFormComponent } from '../users-form/users-form.component';
import { RouterModule } from '@angular/router';


const routes = [
  { path: '', component: UserMasterComponent },
  { path: 'new', component: UsersFormComponent, resolve: { user: UsersGuard } },
  { path: 'edit/:id', component: UsersFormComponent, resolve: { user: UsersGuard } },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
