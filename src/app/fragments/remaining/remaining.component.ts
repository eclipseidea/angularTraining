import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-remaining',
  templateUrl: './remaining.component.html',
  styleUrls: ['./remaining.component.css']
})
export class RemainingComponent  {
  @Input() reminingTasks: any;

  constructor() { }

}
