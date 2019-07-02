import { Component, OnInit } from '@angular/core';
import { Payment } from './payment';
import { PaymentMaster } from './payment-master';
import { PaymentService } from './service/payment.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  private token: string;
  paymentsData?: Payment[] = new Array();
  paymentsMasterData?: PaymentMaster[] = new Array();

  constructor(private service: PaymentService, private auth: AuthService) { }
  ngOnInit() {
  }

  private getPaymentMasters(): void {
    this.service.getPaymentMasters(this.token).subscribe(result => {
      this.paymentsMasterData = result;
      });
    }

  private getPayments(): void {
    this.service.getPayments(this.token).subscribe(result => {
      this.paymentsData = result;
    });
  }

  reflesh() {
    this.getPaymentMasters();
    this.getPayments();
  }
}
