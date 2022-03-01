import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env} from 'src/environments/environment';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with basic auth credentials if available
        const username = env.apiUsername;
        const password = env.apiUsername;
        if (username) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Basic` + btoa(`${username}:${password}`)
                }
            });
        }

        return next.handle(request);
    }
}