import { Component } from '@angular/core';
import { AppStateService } from '../services/app-state.service';
import { LoadingService } from '../services/loading.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public constructor(public appState : AppStateService,
    public loadingService:LoadingService,private router:Router){
      // this.loadingService.isLoading$.subscribe({
      //   next:(value)=>{
      //     this.isLoading = value;
      //   }
      // })
    }

  
  //public isLoading :boolean=false;


  currentAction: any;
  setCurrentaction(a:any) {
    this.currentAction=a;
  }
    actions : Array<any>=[
      {title:"Home",route:"/admin/home",icon:"house"},
      {title:"Products",route:"/admin/products",icon:"arrow-up"},
      {title:"New Product",route:"/admin/newProduct",icon:"plus"}
    ]

    logout(){
      this.appState.authState={}
      this.router.navigateByUrl("/login")
    }
    login(){
      this.router.navigateByUrl("/login")
    }

}
