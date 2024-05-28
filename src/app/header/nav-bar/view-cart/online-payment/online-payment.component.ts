import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-online-payment',
  templateUrl: './online-payment.component.html',
  styleUrls: ['./online-payment.component.css']
})
export class OnlinePaymentComponent {
  constructor(private router:Router){}
  home(){
    this.router.navigate(['/home'])
  }

}
