import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private router:Router){}

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
