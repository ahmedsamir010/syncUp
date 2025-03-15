import { Component } from '@angular/core';

@Component({
  selector: 'app-meetings',
  imports: [],
  templateUrl: './meetings.component.html',
  styleUrl: './meetings.component.scss'
})
export class MeetingsComponent {
  experts = [
    { name: 'Sara Alsharani', borderColor: 'border-purple-600' },
    { name: 'Najla binmahaia', borderColor: 'border-teal-600' },
    { name: 'Haya Alsubaie', borderColor: 'border-orange-400' },
    { name: 'Ebtemah Altuwayjri', borderColor: 'border-red-500' },
    { name: 'Sara Alsharani', borderColor: 'border-blue-500' }
  ];
}
