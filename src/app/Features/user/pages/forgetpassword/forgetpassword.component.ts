import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../../../../Shared/components/header/header.component";
@Component({
  selector: 'app-forgetpassword',
  imports: [CommonModule, FormsModule, RouterModule],

  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss'
})
export class ForgetpasswordComponent {
  email: string = '';
  password: string = '';
  retypePassword: string = '';
  showPassword: boolean = false;
  showRetypePassword: boolean = false;

  onSubmit() {
    if (this.email && this.password && this.retypePassword && this.password === this.retypePassword) {
      console.log('Forget password submitted:', {
        email: this.email,
        password: this.password,
        retypePassword: this.retypePassword
      });
      // Add your forget password logic here (e.g., API call)
    }
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleRetypePassword() {
    this.showRetypePassword = !this.showRetypePassword;
  }
}
