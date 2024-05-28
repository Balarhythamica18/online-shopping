import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private router:Router){}
 signin(){
  this.router.navigate(['/sign-in'])
 }

 login(){
  this.router.navigate(['/product-list'])
 }
}
