import { Routes } from '@angular/router';
import { HomeComponent } from '../../Features/dashboard/pages/home/home.component';
import { ProjectsComponent } from '../../Features/dashboard/pages/projects/projects.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home' ,pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
];
