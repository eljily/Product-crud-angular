import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  constructor(private productService:ProductService,
    private router : Router){}

  products : Array<Product>=[];

  public keyword: string ="";

  public totalPages :number = 0 ;

  public pageSize : number = 4;

  public currentPage : number = 1;

  ngOnInit(){
    this.searchProducts();
  }

  searchProducts(){
    this.productService.searchProducts(this.keyword,this.currentPage,this.pageSize)
    .subscribe({
      next : 
        (resp) => { this.products=resp.body as Product[];
          let totalProducts : number =parseInt(resp.headers.get('x-total-count')!);
          this.totalPages = Math.floor(totalProducts/this.pageSize);
          if(totalProducts%this.pageSize != 0){
            this.totalPages++;
          }
      },
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

    handleGotoPage(page: number) {
      this.currentPage=page;
      this.searchProducts();
      }

      handleEditProduct(product: Product) {
        this.router.navigateByUrl("/editProduct/"+product.id);
        }
}
