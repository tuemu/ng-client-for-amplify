import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { CognitoUserSession } from 'amazon-cognito-identity-js';
import { catchError, tap, map, flatMap } from 'rxjs/operators';
import { Order } from '../order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
    private Url = environment.apiForEcUrl + '/orders';

  constructor(private http: HttpClient) { }

  public getOrders(token: string): Observable<Order[]> {
      const httpOptions = {
          //headers: {Authorization: token}
      };
      //console.log("URL: " + this.Url);
      // return this.http.get<Order[]>(this.Url, httpOptions).pipe(
      //   flatMap(res => {
      //       // console.log("res: " + JSON.stringify(res));
      //       // const returnJson = JSON.parse(res);
      //       // /console.log("res['value']: " + returnJson);
      //       return of(res);
      //   }),
      return from(this.http.get<Order[]>(this.Url, httpOptions));
  }

  public postOrders(token: string, message: string): Observable<Order> {
    const body = JSON.parse(message);
    const httpOptions = {
          //headers: {Authorization: token}
          // dataType: 'json',
          // contentType: "application/json"
         };
    return this.http.post<Order>(this.Url, body, httpOptions)
    .pipe(
      catchError(this.handleError('postOrders', body))
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
