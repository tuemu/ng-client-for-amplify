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
            // console.log("result of API: "+ JSON.stringify(result));
            // const resJson = JSON.parse(JSON.stringify(result));
            //console.log("result['value']: "+ resJson['value']);

            //(JSON.stringify(result)).replace("'", "\"");
            //result.replace("'", "\"");
            let jsonStr = JSON.stringify(result);
            //result = result.replace("'", "\"");
            result = result.split("'").join("\"");
            result = result.split("Decimal(\"").join("");
            result = result.split("\")").join("");
            console.log("jsonStr2: " + result);
            

            console.log("v: " + result);
            console.log("JSON.stringify(v): " + JSON.stringify(result));
            console.log("v type: " + typeof(result));
            console.log("v result[0]: " + JSON.parse(result));

            //this.ordersData.push(JSON.parse(JSON.stringify(result)));
            this.ordersData = JSON.parse(result);
        
            // of(resJson).subscribe(v => {
            //     console.log("v: " + JSON.stringify(v));
            //     this.ordersData.push(JSON.parse(JSON.stringify(v)));
            // });
            
        });
    }


}
