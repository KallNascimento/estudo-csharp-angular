import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserMasterComponent } from './components/user-master/user-master.component';
import { TodoMasterComponent } from './components/todo-master/todo-master.component';

@NgModule({
  declarations: [
    AppComponent,
    UserMasterComponent,
    TodoMasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
