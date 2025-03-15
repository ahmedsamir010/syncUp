import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../Shared/components/header/header.component";
import { FooterComponent } from "../../../../Shared/components/footer/footer.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
