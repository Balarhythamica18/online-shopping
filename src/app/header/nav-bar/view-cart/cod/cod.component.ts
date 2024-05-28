import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cod',
  templateUrl: './cod.component.html',
  styleUrls: ['./cod.component.css']
})
export class CodComponent {
  constructor(private router:Router){}

  home(){
    this.router.navigate(['/home'])
  }

}
