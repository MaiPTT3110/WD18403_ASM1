import { Component, inject } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  product: Product | null = null;
  ProductService = inject(ProductService);
  route = inject(ActivatedRoute);

  ngOnInit(){
    this.route.params.subscribe((params) => {
      this.ProductService.getProductDetail(params['id']).subscribe({
        next: (data) =>(this.product = data),
        error: () => alert('Error'),
      });
    });
  }

}
