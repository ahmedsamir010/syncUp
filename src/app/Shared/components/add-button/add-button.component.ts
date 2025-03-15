import { Component, input, output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-add-button',
  imports: [TranslateModule],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.scss'
})
export class AddButtonComponent {
  clickHandler = output()
  add = input<string>('Add')
}
