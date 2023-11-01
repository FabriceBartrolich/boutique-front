import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    if (token) {
      this.isLoggedIn.next(true);
    }
  }

  
  login(user: any) {
    return this.http
      .post<{ accessToken: string, name: string }>('http://localhost:3000/api/auth/login', user)
      .subscribe((res) => {
        console.log(res);
        localStorage.setItem('token', res.accessToken);
        localStorage.setItem('name', res.name);
         this.isLoggedIn.next(true);
      });
  }

    logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    this.isLoggedIn.next(false);
  }
}
