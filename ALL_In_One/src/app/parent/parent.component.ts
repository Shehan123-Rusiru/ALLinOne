import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {


  public MyName = "";
  public NewName= "";
  


  showItems(newName: any){
     this.NewName = newName;
   }
}
