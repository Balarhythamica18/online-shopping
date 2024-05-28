import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() searchEvent = new EventEmitter<string>();

  onSearch(event: Event) {
    const searchText = (event.target as HTMLInputElement).value.toLowerCase();
    this.searchEvent.emit(searchText);
  }
}
