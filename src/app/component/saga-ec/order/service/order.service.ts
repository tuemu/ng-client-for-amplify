import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CognitoUserSession } from 'amazon-cognito-identity-js';
import { catchError, tap, map } from 'rxjs/operators';
import { Order } from '../order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
    private Url = environment.apiForEcUrl + '/orders';

  constructor(private http: HttpClient) { }

  public getOrders(token: string): Observable<any> {
      const httpOptions = {
          //headers: {Authorization: token}
      };
      console.log("URL: " + this.Url);
      return this.http.get<any>(this.Url, httpOptions).pipe(
        tap(users=> console.log(users)),
        map(res => {
            of(res);
        }),
        catchError(this.handleError('getFile',[]))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
 
      this.log(`${operation} failed: ${error.message}`);
 
      return of(result as T);
    };
  }
 
  private log(message: string) {
    console.log('orderService: ' + message);
  }
}
