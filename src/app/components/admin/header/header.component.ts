import { Component, inject } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  AuthService = inject(AuthService);
  router = inject(Router);

  logout(): void {
    this.AuthService.logout();
    this.router.navigateByUrl('/login'); 
  }

}
