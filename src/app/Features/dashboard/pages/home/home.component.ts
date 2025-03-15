import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomDialogService } from '../../../../Core/services/custom-dialog.service';
import { AddProjectDialogComponent } from '../../components/add-project-dialog/add-project-dialog.component';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    constructor(private dialog: CustomDialogService){}
  
  addProject() {
    this.dialog
      .open({
        component: AddProjectDialogComponent,
        header: 'Add New Project',
      })
   
  }
}
