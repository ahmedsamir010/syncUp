import { Component, output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-form-footer',
  imports: [TranslateModule],
  templateUrl: './form-footer.component.html',
  styleUrl: './form-footer.component.scss'
})
export class FormFooterComponent {
  submitHandler = output();
  cancelHandler = output();
}
