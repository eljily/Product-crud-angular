import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  updateProduct(product: Product):Observable<Product> {
    return this.http.put<Product>("http://localhost:8086/products/"+product.id,product);
    
  }
  getProductById(productId: number) :Observable<Product> {
    return this.http.get<Product>("http://localhost:8086/products/"+productId);
  }

  constructor(private http:HttpClient) { }
  public saveProduct(product: Product):Observable<Product> {
    return this.http.post<Product>("http://localhost:8086/products",
    product);
  }
  public searchProducts(keyword : string="",page:number,size:number) {
    return this.http.get("http://localhost:8086/products?name_like="
    +keyword+"&_page="+page+"&_limit="+size,{observe : 'response'});
  }
  public checkProduct(product:Product) :Observable<Product>{
    return this.http.patch<Product>('http://localhost:8086/products/' + product.id,
      { checked: !product.checked });
  }
  public deleteProduct(product:Product){
    return this.http.delete('http://localhost:8086/products/'+product.id);
  }
}
