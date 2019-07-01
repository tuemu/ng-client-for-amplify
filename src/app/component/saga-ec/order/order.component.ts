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
    constructor(private service: OrderService, private auth: AuthService) { }

    ngOnInit() {
        //this.token = this.auth.getIdToken();
    }

    getOrders():void {
        this.service.getOrders(this.token).subscribe(result => {
            this.ordersData = result;
        });
    }
}
