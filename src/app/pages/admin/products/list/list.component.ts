import { Component, inject } from '@angular/core';
import { Product, ProductService } from '../../../../services/product.service';
import { AuthService, User } from '../../../../services/auth.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products: Product[] = [];
  users: User[] = [];
  productService = inject(ProductService)
  authService = inject(AuthService)

  delete(id: string) {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      this.productService.delete(id).subscribe({
        next: () => {
          this.products = this.products.filter(product => product.id !== id);
          console.log(`Product with id ${id} deleted.`);
        },
        error: (e) => {
          console.log("Error:" + e.message);
        }
      });
    } else {
      console.log("Delete action canceled.");
    }
  }

  ngOnInit() {
    this.productService.getAll().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (e) => {
        console.log("Error:" + e.message);

      }
    })
    this.authService.getAll().subscribe({
      next: (data) => {
        this.users = data;
        console.log(data);

      },
      error: (e) => {
        console.log("Error:" + e.message);
      }
    })
  }
}
