import { Component, OnInit } from '@angular/core';
import { StockService } from './service/stock.service';
import { Stock } from './stock';
import { AuthService } from 'src/app/auth/auth.service';
import { StockMaster } from './stock-master';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
    private token: string;
    stocksData?: Stock[] = new Array();
    stocksMasterData?: StockMaster[] = new Array();

    constructor(private service: StockService, private auth: AuthService) { }
    ngOnInit() {
    }

    private getStockMasters():void {
        this.service.getStockMasters(this.token).subscribe(result => {
            this.stocksMasterData = result;
        });
    }

    private getStocks():void {
        this.service.getStocks(this.token).subscribe(result => {
            this.stocksData = result;
        });
    }

    reflesh() {
        this.getStockMasters();
        this.getStocks();
      }
    
}
