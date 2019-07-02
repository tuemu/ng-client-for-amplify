import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Stock } from '../stock';
import { StockMaster } from '../stock-master';

@Injectable({
  providedIn: 'root'
})
export class StockService {
    private Url = environment.apiForEcUrl + '/stocks';
    private UrlMaster = environment.apiForEcUrl + '/items/stocks';
    constructor(private http: HttpClient) { }

    public getStocks(token: string): Observable<Stock[]> {
        const httpOptions = {
            //headers: {Authorization: token}
        };
        return from(this.http.get<Stock[]>(this.Url, httpOptions));
    }

    public getStockMasters(token: string): Observable<StockMaster[]> {
        const httpOptions = {
            //headers: {Authorization: token}
        };
        return from(this.http.get<StockMaster[]>(this.UrlMaster, httpOptions));
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
