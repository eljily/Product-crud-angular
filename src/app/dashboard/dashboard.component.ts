import { Component } from '@angular/core';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  public constructor(public appSate:AppStateService){}

  totalChecked()  {
    let checkedProducts = this.appSate.productsState.products.filter((p:any)=>p.checked==true);
    return checkedProducts.length;
    }

}
