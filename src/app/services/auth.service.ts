import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export type User = {
  email: string;
  password: string;
};

type LoginResponse = {
  accessToken: string;
  user: {
    email: string;
    role: string;
  }
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);


  getAll() {
    return this.http.get<User[]>('http://localhost:3000/users');
  }


  registerUser(data: User) {
    return this.http.post('http://localhost:3000/register', data);
  }

  loginUser(data: User) {
    return this.http.post<LoginResponse>('http://localhost:3000/login', data);
  }
  
  isLoggedIn(): boolean {
    console.log(' test local',!!localStorage.getItem('token'));
    
    return !!localStorage.getItem('token');
  }

  getUserEmail(): string | null {
    return localStorage.getItem('email');
  }
  getRole(): string | null {
    return localStorage.getItem('role');
  }
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('role');

  }
}
