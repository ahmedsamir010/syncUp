import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from "../../../../Shared/components/header/header.component";
@Component({
  selector: 'app-add-team-member',
  imports: [CommonModule, FormsModule, RouterModule],

  templateUrl: './add-team-member.component.html',
  styleUrl: './add-team-member.component.scss'
})
export class AddTeamMemberComponent {
  teamMembers: { email: string; name: string }[] = [{ email: '', name: '' }];

  constructor(private router: Router) {}

  addMember() {
    this.teamMembers.push({ email: '', name: '' });
  }

  removeMember(index: number) {
    if (this.teamMembers.length > 1) {
      this.teamMembers.splice(index, 1);
    }
  }

  onSubmit() {
    if (this.teamMembers.every(member => member.email && member.name)) {
      console.log('Team Members added:', this.teamMembers);
      // Add your add team members logic here (e.g., API call)
      // Optionally navigate to another page after submission
      this.router.navigate(['/dashboard']); // Replace '/dashboard' with your desired route
    }
  }

  onSkip(event: Event) {
    event.preventDefault();
    console.log('Skipped adding team members');
    // Navigate to another page (e.g., dashboard) when skipping
    this.router.navigate(['/dashboard']); // Replace '/dashboard' with your desired route
  }
}
