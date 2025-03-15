import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from "../../../../Shared/components/header/header.component";

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterModule,],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  fullName: string = '';
  email: string = '';
  password: string = '';
  terms: boolean = false;
  showPassword: boolean = false;
  constructor(private router: Router) {}
  onSubmit() {
    if (this.fullName && this.email && this.password && this.terms) {
      console.log('Register submitted:', {
        fullName: this.fullName,
        email: this.email,
        password: this.password,
        terms: this.terms
      });
      // Add your registration logic here (e.g., API call)
    }
    this.router.navigate(['/create-team']);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
