import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, take} from 'rxjs/operators';
import {Error} from './error-handling/error/error';
import {Router} from '@angular/router';
import {AuthService} from './authentication/services/auth.service';
import {AppService} from './app.service';


@Injectable()
export class GlobalHttpInterceptor implements HttpInterceptor {

  requestWithAuth: any;
  
  constructor(private router: Router, private auth: AuthService, private appService: AppService) {}
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // add Bearer token in every request //
    const token = this.appService.token;
      this.requestWithAuth = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      })

    return next.handle(this.requestWithAuth).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {  // if user is not authenticated, redirect to login form
        this.auth.temporary_save = 'Unauthorized User.'
        this.router.navigate(['login'])
        this.auth.logout().pipe(take(1)).subscribe();
      }
      if (error.status >= 500) {
        this.auth.errorMessage = 'General Error. Try again later or contact the administrator.'
        this.router.navigate(['login'])
        this.auth.logout().pipe(take(1)).subscribe();
      }
      const errorMessage =  new Error();
      errorMessage.message = error.error.message;
      errorMessage.code = error.status;
      errorMessage.displayed_message = error.error.displayed_message;

      return throwError(errorMessage);
    })
    );
  }
}
