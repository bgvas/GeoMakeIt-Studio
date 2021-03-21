import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Error} from './classes/error/error';

@Injectable()
export class GlobalHttpInterceptor implements HttpInterceptor {



  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Todo  add Uth Token Service //
    localStorage.setItem('token', '1|XxqPWqgRFk9yj9B7KKmwRBOFziaeiaKsHYb235HA');
    const requestWithAuth = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' +  localStorage.getItem('token')
      }
    });

    return next.handle(requestWithAuth).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
          // TODO auto redirect to login form //
      }
      const errorMessage =  new Error();
      if (error.error instanceof ErrorEvent) {
        errorMessage.message = error.statusText;
        errorMessage.code = error.status;
      } else {
        errorMessage.message = error.statusText;
        errorMessage.code = error.status;
      }

      return throwError(errorMessage);
    })
    );
  }
}
