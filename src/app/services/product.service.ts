import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export type Product = {
  id: string,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: { rate: number, count: number }
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http = inject(HttpClient)

  getAll() {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  getProductDetail(id:string){
    return this.http.get<Product>(`http://localhost:3000/products/${id}`);
  }

  delete(id: string) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }

  constructor() { }
}
