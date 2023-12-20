import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  
  constructor(private productService:ProductService){}

  products : Array<Product>=[];
  public keyword: string ="";


serachProducts() {
this.productService.searchProducts(this.keyword).subscribe({
  next:data=>{
    this.products=data;
  },
  error:err=>{
    console.log(err);
  }
})
}

  

  ngOnInit(){
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts(1,4)
    .subscribe({
      next : data =>this.products=data,
      error : err=>console.log(err)
    },
    ); 
    //this.products$=this.productService.getProducts();
  }

  handleCheckProduct(product: Product) {
    this.productService.checkProduct(product).subscribe({
      next : () =>{
         product.checked=!product.checked;
        //this.getProducts();
      }
    })
  }
  handleDeleteProduct(product: Product) {
    if(confirm("Estes vous sure?"))
    this.productService.deleteProduct(product).subscribe({
      next : value=>{
       // this.getProducts();
       this.products=this.products.filter(p=>p.id!=product.id);
      }
    })
    }
}
