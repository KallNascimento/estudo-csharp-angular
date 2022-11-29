import { Component, inject, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';


@Component({
  selector: 'app-error-snack',
  templateUrl: './error-snack.component.html',
  styleUrls: ['./error-snack.component.css'],
  styles: [
    `
    :host {
      display: flex;
    }
    
  `,]

})
export class ErrorSnackComponent {
  snackBarRef = inject(MatSnackBarRef);
  constructor(
    @Inject(MAT_SNACK_BAR_DATA)
    public snackMessage: string,
  ) { }

}
