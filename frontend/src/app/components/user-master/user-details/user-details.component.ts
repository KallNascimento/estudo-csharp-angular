import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError, Observable, of, take } from 'rxjs';
import { User } from 'src/app/types/user.type';
import { UserService } from 'src/app/services/user.service';
import { ErrorSnackComponent } from 'src/app/shared/components/error-snack/error-snack.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
    public users$: Observable<User[]>;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService,
        private _snackBar: MatSnackBar,
    ) { }


    ngOnInit() {
        //this.loadData;
    }

    // loadData() {
    //     this.users$ = this.userService.listById(id)
    //     .pipe(
    //       catchError((error) => {
    //         console.log(error);
    //         throw error;
    //       }),
    //       take(1)
    //     );
    // }


    private onError(errorMsg: string) {
        this._snackBar.openFromComponent(ErrorSnackComponent, {
            duration: 5000,
            data: errorMsg,
        });
    }

    ngOnDestroy(): void {

    }

}