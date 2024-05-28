import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
signin: any;
name: string = '';
  email: string = '';
  password: string = '';
confirmPassword: string = '';
constructor(private router:Router){}

login(){
  this.router.navigate(['/login'])
}
}
