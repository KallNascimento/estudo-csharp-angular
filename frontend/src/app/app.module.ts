import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { AppComponent } from './app.component';
import { UserMasterComponent } from './components/user-master/user-master.component';
import { TodoMasterComponent } from './components/todo-master/todo-master.component';

import { TitleComponent } from './components/shared/titulo/title.component';
import { UserInterceptor } from './interceptors/user.interceptor';
import { UserService } from './services/user.service';
import { RouterModule } from '@angular/router';
import { TodoFormComponent } from './components/todo-master/todo-form/todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserMasterComponent,
    TodoMasterComponent,
    TitleComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule
  

  ],
  providers: [
    UserService,
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
