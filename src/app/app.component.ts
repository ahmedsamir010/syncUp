import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { LanguageService } from './Core/services/language.service';
import { LoaderComponent } from "./Shared/components/loader/loader.component";
import { ToastModule } from 'primeng/toast';
import { AuthService } from './Core/services/auth.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConfirmDialogModule, LoaderComponent,ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 
}
