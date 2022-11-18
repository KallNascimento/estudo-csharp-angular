import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { AppComponent } from './app.component';
import { UserMasterComponent } from './components/user-master/user-master.component';
import { TodoMasterComponent } from './components/todo-master/todo-master.component';
// import { UserDetailsComponent } from './components/user-master/user-details/user-details.component';
import { TitleComponent } from './components/shared/titulo/title.component';
import { UserInterceptor } from './interceptors/user.interceptor';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserMasterComponent,
    TodoMasterComponent,
    // UserDetailsComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    NgxSpinnerModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3500,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
      closeButton: true
    }),
    BrowserAnimationsModule,

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
