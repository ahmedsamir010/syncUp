import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../../../../Shared/components/header/header.component";

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterModule, HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
