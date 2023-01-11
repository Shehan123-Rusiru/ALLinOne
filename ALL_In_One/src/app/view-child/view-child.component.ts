import { Component } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent {

  message = "";
	count : number = 0;
  
  constructor() { 
 
  }

	increaseByOne() {
	   this.count = this.count + 1;
	   this.message = "Counter: " + this.count;
	}
	decreaseByOne() {
	   this.count = this.count - 1;
	   this.message = "Counter: " + this.count;
	}
  
}
