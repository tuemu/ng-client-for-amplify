import { Component, OnInit } from '@angular/core';
import { Order } from './order'
import { OrderService } from './service/order.service';
import { AuthService } from 'src/app/auth/auth.service';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
    private token: string;
    ordersData?: Order[] = new Array();
    requestJson: string; 

    constructor(private service: OrderService, private auth: AuthService) { }

    ngOnInit() {
        //this.token = this.auth.getIdToken();
        this.getOrders();
    }

    getOrders():void {
        this.service.getOrders(this.token).subscribe(result => {
            this.ordersData = result;
        });

        this.requestJson = JSON.stringify(this.generateInitRequest(), null , "\t");
    }

    createOrder():void {
        console.log("## Requested value: "+ this.requestJson);
        console.log("## Persed value: "+ JSON.parse(this.requestJson));
        this.service.postOrders(this.token, this.requestJson)
        .subscribe(order => console.log("Posted Order: " + order));
    }

    private generateInitRequest (): any {
        return {
            "id": "prodid_0001",
            "orderNo": "OR-9999-9999",
            "itemName": "pullover jacket",
            "itemId": "A100",
            "amount": 5,
            "price": 3000,
            "userId": "U100"
        };
    }
}

