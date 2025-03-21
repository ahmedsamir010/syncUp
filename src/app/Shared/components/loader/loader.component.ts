import { Component } from '@angular/core';
import { LoadingService } from '../../../Core/services/loading.service';

@Component({
  selector: 'app-loader',
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  constructor(public loader:LoadingService) { }
}
