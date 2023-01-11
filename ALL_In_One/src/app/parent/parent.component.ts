import { Component, ViewChild,AfterViewInit } from '@angular/core';
import { ViewChildComponent } from '../view-child/view-child.component'; 
import { ServiceDataService } from '../service-data.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  constructor(private data: ServiceDataService){

  }
  clickEvent() {
    this.data.clickEvent()
  }
  
  public MyName = "";
  public NewName= "";
  
  showItems(newName: any){
     this.NewName = newName;
  
   }

  @ViewChild(ViewChildComponent)
       private numberComponent = {} as ViewChildComponent;
       increase() {
              this.numberComponent.increaseByOne();
       }
       decrease() {
              this.numberComponent.decreaseByOne();
       }
     
}
