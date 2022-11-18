import { HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { UserService } from "../services/user.service";

@Injectable({
    providedIn: 'root'
  })
  export class UserInterceptor {
    constructor(private userService: UserService) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
        this.userService.isLoading.next(true);
    
        return next
          .handle(req)
          .pipe(finalize(() => [this.userService.isLoading.next(false)]));
      }

}