import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { Genre } from '../models/genre';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string = 'http://localhost:3000/api';

  token=localStorage.getItem('token');
  header=new HttpHeaders().set('Authorization',`Bearer ${this.token}`);

  constructor(private http: HttpClient) {}

getAllProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(`${this.url}/product`);
}

getAllCategories(): Observable<Genre[]> {
  return this.http.get<Genre[]>(`${this.url}/genre`,{headers:this.header});	
}


 addProduct(product: Product): Observable<Product> {
  return this.http.post<Product>(`${this.url}/product`, product, {headers: this.header});
}

  getProductsByUser(userId: number): Observable<Product[]> {
  return this.http.get<Product[]>(`${this.url}/user/${userId}`);
}

updateProduct(product: Product, id: number): Observable<Product> {
  return this.http.patch<Product>(`${this.url}/product/${id}`, product, {headers: this.header});
}

deleteProduct(productId: number) {
  console.log(productId, this.header);
  
  return this.http.delete(`${this.url}/product/${productId}`, {headers:this.header});
}


}
