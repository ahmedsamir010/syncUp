import { Routes } from "@angular/router";
import { HomeComponent } from "../../Features/user/pages/home/home.component";
import { LoginComponent } from "../../Features/user/pages/login/login.component";
import { RegisterComponent } from "../../Features/user/pages/register/register.component";
import { ForgetpasswordComponent } from "../../Features/user/pages/forgetpassword/forgetpassword.component";
import { CreateTeamComponent } from "../../Features/user/pages/create-team/create-team.component";
import { AddTeamMemberComponent } from "../../Features/user/pages/add-team-member/add-team-member.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home' ,pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  { path: 'create-team', component: CreateTeamComponent },
  { path: 'add-team', component: AddTeamMemberComponent },
];