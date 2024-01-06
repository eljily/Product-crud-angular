import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { AppStateService } from './app-state.service';
import { LoadingService } from './loading.service';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(public appState :AppStateService,
    private loadingService:LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //this.appState.setProductState({status : "LOADING"})
   // console.log(this.appState.productsState.status)
   this.loadingService.showLoadingSpinner();
    let req = request.clone({
      headers: request.headers.set("Authorization","Bearer JWT")
    });
    return next.handle(req).pipe(
      finalize(()=>{
       // this.appState.setProductState({
        //  status : "LOADED"
        this.loadingService.hideLoadingSpinner();
      //  });
       // console.log(this.appState.productsState.status)
      })
    )
  }
}
