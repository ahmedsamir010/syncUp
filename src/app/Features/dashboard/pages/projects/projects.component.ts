import { Component } from '@angular/core';
import { AddProjectDialogComponent } from '../../components/add-project-dialog/add-project-dialog.component';
import { CustomDialogService } from '../../../../Core/services/custom-dialog.service';
import { CreateMeetingComponent } from '../../components/create-meeting/create-meeting.component';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  tabs = ['All', 'Active', 'Upcoming', 'Completed'];
  filter: string = 'All';

  constructor(private dialog: CustomDialogService){}
  
  
  projects = [
    { title: 'Web Development', status: 'Active', dueDate: 'Due 30/11/2024', tasks: 8, progress: 50, borderColor: 'border-purple-600' },
    { title: 'Mobile App Design', status: 'Active', dueDate: 'Due 30/11/2024', tasks: 8, progress: 50, borderColor: 'border-teal-600' },
    { title: 'Web Development', status: 'Upcoming', dueDate: 'Due 30/11/2024', tasks: 5, progress: 20, borderColor: 'border-orange-400' },
    { title: 'Web Development', status: 'Completed', dueDate: 'Due 30/11/2024', tasks: 8, progress: 90, borderColor: 'border-red-500' }
  ];


  filteredProjects = [...this.projects];



  setFilter(tab: string) {
    this.filter = tab;
    if (tab === 'All') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(project => project.status === tab);
    }
  }

  addProject() {
    this.dialog
      .open({
        component: AddProjectDialogComponent,
        header: 'Add New Project',
      })
   
  }
  startMeeting() {
    this.dialog
      .open({
        component: CreateMeetingComponent,
        header: 'Start New Meeting',
      })
   
  }
}
