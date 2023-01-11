import { Component } from '@angular/core';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-service-observable-child',
  templateUrl: './service-observable-child.component.html',
  styleUrls: ['./service-observable-child.component.scss']
})
export class ServiceObservableChildComponent {

  MyMessage="";
  subscription: Subscription = new Subscription;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.MyMessage = message)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  newMessage() {
    this.data.changeMessage("Hello from ServiceObserver Child")
  }


}
