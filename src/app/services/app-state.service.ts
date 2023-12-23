import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  constructor() { }

  public productsState:any={
    
  products :[],

  keyword: "",

  totalPages : 0 ,

  pageSize : 4,

  currentPage : 1
  }
}
