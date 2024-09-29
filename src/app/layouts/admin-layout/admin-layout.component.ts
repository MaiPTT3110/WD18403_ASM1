import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/admin/header/header.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/admin/sidebar/sidebar.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet,SidebarComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

}
