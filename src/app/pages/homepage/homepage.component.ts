import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  products: Product[] = [];
  productService = inject(ProductService)

  ngOnInit(){
    this.productService.getAll().subscribe({
      next: (data) =>{
        this.products = data;
      },
      error: (e) =>{
        console.log("Error:" + e.message);
        
      }
    })
  }


}
