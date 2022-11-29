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
import { TodoFormComponent } from './components/todo-master/todo-form/todo-form.component';
import { TodoTableComponent } from './components/todo-master/todo-table/todo-table.component';
import { UsersTableComponent } from "./components/user-master/users-table/users-table.component";

import { UserInterceptor } from './interceptors/user.interceptor';
import { UserService } from './services/user.service';
import { RouterModule } from '@angular/router';
import { UsersFormComponent } from './components/user-master/users-form/users-form.component';

@NgModule({
    declarations: [
        AppComponent,
        TodoMasterComponent,
        TodoFormComponent,
        TodoTableComponent,
        UserMasterComponent,
        UsersFormComponent,
        UsersTableComponent
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
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AppMaterialModule,

    ]
})
export class AppModule { }
