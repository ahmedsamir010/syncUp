import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../Shared/components/header/header.component";
import { FooterComponent } from "../../../../Shared/components/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
