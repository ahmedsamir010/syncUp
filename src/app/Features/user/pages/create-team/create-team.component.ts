import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from "../../../../Shared/components/header/header.component";

@Component({
  selector: 'app-create-team',
  imports: [CommonModule, FormsModule, RouterModule],

  templateUrl: './create-team.component.html',
  styleUrl: './create-team.component.scss'
})
export class CreateTeamComponent {
  teamManagerName: string = '';
  teamName: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.teamManagerName && this.teamName) {
      console.log('Create Team submitted:', {
        teamManagerName: this.teamManagerName,
        teamName: this.teamName
      });
      // Add your create team logic here (e.g., API call)
      // Optionally navigate to another page after submission
      this.router.navigate(['/add-team']); // Replace '/dashboard' with your desired route
    }
  }

  onSkip(event: Event) {
    event.preventDefault();
    console.log('Skipped team creation');
     this.router.navigate(['/dashboard']); // Replace '/dashboard' with your desired route
  }
}
