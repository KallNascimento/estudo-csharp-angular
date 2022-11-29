import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorSnackComponent } from './components/error-snack/error-snack.component';



@NgModule({
  declarations: [
    ErrorSnackComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports:[]
})
export class SharedModule { }
