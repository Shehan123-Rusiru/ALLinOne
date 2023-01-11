import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() name: string;

  constructor(){
    this.name = "";
  
  }
  @Output() newNameEvent = new EventEmitter<string>();

  addItem(value: any) {
    this.newNameEvent.emit(value);
  }
}
