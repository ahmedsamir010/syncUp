import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../../Features/dashboard/components/side-bar/side-bar.component';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet,SideBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
