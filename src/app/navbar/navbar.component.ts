import { Component } from '@angular/core';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public constructor(public appState : AppStateService){}
  currentAction: any;
  setCurrentaction(a:any) {
    this.currentAction=a;
  }
    actions : Array<any>=[
      {title:"Home",route:"/home",icon:"house"},
      {title:"Products",route:"/products",icon:"arrow-up"},
      {title:"New Product",route:"/newProduct",icon:"plus"}
    ]

}
