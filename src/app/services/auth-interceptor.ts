import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

// Implementation for all the outgoing request
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService : AuthService){}
    
    intercept(req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>> {
       console.log('intercept', req);
       console.log('url : ' + req.url);
       const cloneReq = req.clone({
           params : new HttpParams().set("auth", this.authService.getToken())
        //    headers : new HttpHeaders().set()
       })

        return next.handle(cloneReq);
    }
}