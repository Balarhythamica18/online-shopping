import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent {
  constructor(private router:Router) {
  }
contact(event: Event){
  event.preventDefault();{
  this.router.navigate(['/contact'])
  }
 
}
viewCart(event:Event){
  event.preventDefault();{
    this.router.navigate(['/view-cart'])
  }
}
signin(event:Event){
  event.preventDefault();{
  this.router.navigate(['/sign-in'])
  }
}
}
