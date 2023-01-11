import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ViewChildComponent } from '../view-child/view-child.component';
import { ServiceDataService } from '../service-data.service';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, OnDestroy {

  constructor(private data: ServiceDataService, private data1: DataService) {

  }
  //Service click event
  clickEvent() {
    this.data.clickEvent()
  }

  //input and output
  public MyName = "";
  public NewName = "";

  showItems(newName: any) {
    this.NewName = newName;

  }

// viewChild

  @ViewChild(ViewChildComponent)
  private numberComponent = {} as ViewChildComponent;
  increase() {
    this.numberComponent.increaseByOne();
  }
  decrease() {
    this.numberComponent.decreaseByOne();
  }

  //Service with observable

  MyMessage = "";
  subscription: Subscription = new Subscription;

  ngOnInit() {
    this.subscription = this.data1.currentMessage.subscribe(message => this.MyMessage = message)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
