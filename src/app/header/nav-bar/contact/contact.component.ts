import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
name:string='';
email:string='';
phone: any;
message:string='';
 constructor(private router:Router){}

 responseMessage(){
  this.router.navigate(['/response-message'])
 }
}
