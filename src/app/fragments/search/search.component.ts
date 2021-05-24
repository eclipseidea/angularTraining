import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() searchingItem: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  enableFilterMod(value: string) {
    this.searchingItem.emit(value);
  }

}

