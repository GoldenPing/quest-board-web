import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { NavigationExtras, Router } from '@angular/router';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private router : Router){}


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse && event.status === 201) {
          // Traite la réponse avec le code 201 ici
          console.log('La requête a été traitée avec succès !');
        }
      }),
      catchError(error =>{
        if(error.status === 401){
          localStorage.removeItem('id_user')
          localStorage.removeItem('username')
          localStorage.removeItem('password')
          localStorage.removeItem('admin')

          const navigationExtra: NavigationExtras = {
            queryParams: {"error" : true}
          }

          this.router.navigate(['login'],navigationExtra)
        }

        return throwError(error)
      })
    );
  }
}
