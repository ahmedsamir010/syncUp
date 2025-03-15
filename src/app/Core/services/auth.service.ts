import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private api: ApiService, private router: Router) {}
  isLoggedin() {
    const token = localStorage.getItem('token');
    return !!token;
  }
  login(loginData: any) {
    return this.api.add('Auth/login', loginData).pipe(
      tap({
        next: (value: any) => {

          localStorage.setItem('token', value.token);
          localStorage.setItem('email', value.email);

        },
      })
    );
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['ar/auth/login']);
  }
  // autoLogout() {
  //   const expireDate = localStorage.getItem('expireDate');
  //   if (!expireDate) return;
  //   const expirationTime =
  //     new Date(expireDate).getTime() - new Date().getTime();
  //   if (expirationTime < 1) {
  //     this.logout();
  //   }
  // }
}
