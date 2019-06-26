import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
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
      return this.http.get<Order[]>(this.Url, httpOptions).pipe(
        flatMap(res => {
            //console.log("res: " + res);
            const returnJson = JSON.parse(JSON.stringify(res));
            // /console.log("res['value']: " + returnJson);
            return of(returnJson);
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
