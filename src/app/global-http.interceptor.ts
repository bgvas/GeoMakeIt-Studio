import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable()
export class GlobalHttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Todo  add Uth Token Service //
    const hardCodedToken = '1a23b94-03453-23423-23456-fr345s52345bg0';
    const requestWithAuth = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + hardCodedToken
      }
    });

    return next.handle(requestWithAuth).pipe(
        retry(2),
        catchError((error: HttpErrorResponse) => {
          console.log('Http Error: ' + request.url);
          return throwError(error);
        })
    );
  }
}
