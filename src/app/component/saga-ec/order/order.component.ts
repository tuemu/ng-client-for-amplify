import { Component, OnInit } from '@angular/core';
import { Order } from 'aws-sdk/clients/glue';
import { OrderService } from './service/order.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
    private token: string;
    ordersData: Order[];
    constructor(private service: OrderService, private auth: AuthService) { }

    ngOnInit() {
        this.token = this.auth.getIdToken();
    }

    getOrders():void{
        this.service.getOrders(this.token).subscribe(result => {
            console.log("result of API: "+ result);
            this.ordersData = result;
        });
    }


}
