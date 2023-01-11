import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component {

  @Output() newNameEvent = new EventEmitter<string>();

  addItem(value: any) {
    this.newNameEvent.emit(value);
  }

}
