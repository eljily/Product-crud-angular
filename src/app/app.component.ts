import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

