import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isShow: boolean = false;
  userEmail: string | null = null;
  isLoggedIn: boolean = false;
  router = inject(Router);

  constructor(private authService: AuthService) {
    this.checkLoginStatus();
  }
  toggleCss() {
    this.isShow = !this.isShow;
  }

  checkLoginStatus(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
      this.userEmail = this.authService.getUserEmail();
    }
  }

  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false; 
    this.userEmail = null; 
    this.router.navigateByUrl('/login'); 
  }
  ngOnInit(): void {
    this.checkLoginStatus();
    console.log(this.isLoggedIn);
    
  }

}
