import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Payment } from '../payment';
import { PaymentMaster } from '../payment-master';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private Url = environment.apiForEcUrl + '/payments';
  private UrlMaster = environment.apiForEcUrl + '/users/payments';
  constructor(private http: HttpClient) { }

  public getPayments(token: string): Observable<Payment[]> {
      const httpOptions = {
          //headers: {Authorization: token}
      };
      return from(this.http.get<Payment[]>(this.Url, httpOptions));
  }

  public getPaymentMasters(token: string): Observable<PaymentMaster[]> {
      const httpOptions = {
          //headers: {Authorization: token}
      };
      return from(this.http.get<PaymentMaster[]>(this.UrlMaster, httpOptions));
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
