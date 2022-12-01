import { NgModule } from '@angular/core';
import { UsersGuard } from 'src/app/guards/users.guard';
import { UserMasterComponent } from '../user-master.component';
import { UsersFormComponent } from '../users-form/users-form.component';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from '../user-details/user-details.component';


const routes = [
  { path: '', component: UserMasterComponent },
  { path: 'new', component: UsersFormComponent, resolve: { user: UsersGuard } },
  { path: 'edit/:id', component: UsersFormComponent, resolve: { user: UsersGuard } },
  { path: 'view/:id', component: UserDetailsComponent, resolve: { user: UsersGuard } },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
