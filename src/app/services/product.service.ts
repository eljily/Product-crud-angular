import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private host : string = "http://localhost:8086/products/"
  updateProduct(product: Product):Observable<Product> {
    return this.http.put<Product>(this.host+product.id,product);
    
  }
  getProductById(productId: number) :Observable<Product> {
    return this.http.get<Product>(this.host+productId);
  }

  constructor(private http:HttpClient) { }
  public saveProduct(product: Product):Observable<Product> {
    return this.http.post<Product>(this.host,
    product);
  }
  public searchProducts(keyword : string="",page:number,size:number) {
    return this.http.get(this.host+"?name_like="
    +keyword+"&_page="+page+"&_limit="+size,{observe : 'response'});
  }
  public checkProduct(product:Product) :Observable<Product>{
    return this.http.patch<Product>(this.host + product.id,
      { checked: !product.checked });
  }
  public deleteProduct(product:Product){
    return this.http.delete(this.host+product.id);
  }
}
