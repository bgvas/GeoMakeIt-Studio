import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Error} from './classes/error/error';
import {Router} from '@angular/router';
import {AuthService} from './authentication/services/auth.service';


@Injectable()
export class GlobalHttpInterceptor implements HttpInterceptor {

  requestWithAuth: any;
  
  constructor(private router: Router, private auth: AuthService) {}
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Todo  add Uth Token Service //
    const tokenV2 = sessionStorage.getItem('v2Token');
    const tokenV1 = sessionStorage.getItem('v1Token');
    if (request.url.includes('/v1/')) {
      this.requestWithAuth = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + tokenV1
        }
      })
    } else {
        this.requestWithAuth = request.clone({
          setHeaders: {
            Authorization: 'Bearer ' + tokenV2
          }
        })
      }

    return next.handle(this.requestWithAuth).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {  // if user is not authenticated, redirect to login form
        this.router.navigate(['login'])
        this.auth.logout();
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
