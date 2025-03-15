import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { InputSwitchModule } from 'primeng/inputswitch';  // ✅ Import the correct module

@Component({
  selector: 'app-create-meeting',
  imports: [
     FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    ToggleButtonModule,
    InputTextModule,
     ButtonModule,
     CommonModule,
     FormsModule,
     InputSwitchModule 
  ],
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.scss']
})
export class CreateMeetingComponent {
  meetingForm: FormGroup;
  scheduleLater: boolean = false;
  selectedDate: Date | null = null;
  selectedTime: Date | null = null;
  isVideoEnabled: boolean = false;
  isAudioEnabled: boolean = false;

  constructor(private fb: FormBuilder) {
    this.meetingForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      date: [null],
      time: [null]
    });
  }

  onScheduleChange() {
    if (!this.scheduleLater) {
      this.meetingForm.patchValue({ date: null, time: null });
    }
  }

  toggleVideo() {
    this.isVideoEnabled = !this.isVideoEnabled;
  }

  toggleAudio() {
    this.isAudioEnabled = !this.isAudioEnabled;
  }

  onSubmit() {
    if (this.meetingForm.valid) {
      console.log('Meeting Data:', this.meetingForm.value);
    }
  }

  onCancel() {
    this.meetingForm.reset();
    this.scheduleLater = false;
  }
}