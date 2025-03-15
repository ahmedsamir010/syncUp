import { Routes } from "@angular/router";
import { HomeComponent } from "../../Features/user/pages/home/home.component";
import { LoginComponent } from "../../Features/user/pages/login/login.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home' ,pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
];