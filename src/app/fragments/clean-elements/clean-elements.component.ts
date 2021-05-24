import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-clean-elements',
  templateUrl: './clean-elements.component.html',
  styleUrls: ['./clean-elements.component.css']
})
export class CleanElementsComponent {

  @Output() cleanCheckedElements : EventEmitter<null> = new EventEmitter();

  constructor() { }

  deleteCheckedElements() {
    this.cleanCheckedElements.emit();
  }
}
