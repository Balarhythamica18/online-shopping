import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() searchProduct: EventEmitter<string> = new EventEmitter<string>();
  searchText: string = '';

  constructor(private router: Router) {}

  search() {
    this.searchProduct.emit(this.searchText);
  }
}
