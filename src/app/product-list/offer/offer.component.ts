import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {
offerMessage:boolean=true;
constructor(private router:Router){}
  ngOnInit(): void {
    // Show the offer message when the component initializes
    this.offerMessage = true;
  }
  closeOfferMessage(): void {
    this.offerMessage = false;
  }
}
