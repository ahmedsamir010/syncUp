import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChipModule } from 'primeng/chip';
import { FileUploadModule } from 'primeng/fileupload';
import { FooterComponent } from "../../../../Shared/components/footer/footer.component";

@Component({
  selector: 'app-add-project-dialog',
  standalone: true,
  imports: [
    DialogModule,
    DropdownModule,
    InputTextModule,
    CalendarModule,
    ButtonModule,
    FormsModule,
    CommonModule,
    ChipModule,
    FileUploadModule,
 ],
  templateUrl: './add-project-dialog.component.html',
  styleUrls: ['./add-project-dialog.component.scss']
})
export class AddProjectDialogComponent {
  displayDialog: boolean = false;
  projectTypes: any[] = [
    { label: 'Select Project Type', value: null },
    { label: 'Web Development', value: 'web' },
    { label: 'Mobile App Design', value: 'mobile' }
  ];

  selectedProjectType: any = null;
  projectName: string = '';
  description: string = '';
   startDate: Date | null = null;
  endDate: Date | null = null;
  selectedColor: string = '';
  logoPreview: string | null = null;
  attachmentPreviews: { name: string; url: string; blob: Blob }[] = [];
  members: { name: string; email: string }[] = [];
  newMemberName = '';
  newMemberEmail = '';
  colors: string[] = ['#FF5733', '#FFA500', '#008000', '#007BFF', '#800080'];

  openDialog() {
    this.displayDialog = true;
  }
 

  onLogoUpload(event: any) {
    const file = event.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => this.logoPreview = reader.result as string;
      reader.readAsDataURL(file);
    }
  }

  onAttachmentsUpload(event: any) {
    for (let file of event.files) {
      const blob = new Blob([file], { type: file.type });
      const blobUrl = URL.createObjectURL(blob);

      this.attachmentPreviews.push({ name: file.name, url: blobUrl, blob });
    }
  }

  removeAttachment(index: number) {
    URL.revokeObjectURL(this.attachmentPreviews[index].url); // Free up memory
    this.attachmentPreviews.splice(index, 1);
  }

  selectColor(color: string) {
    this.selectedColor = color;
  }

  openAttachment(blobUrl: string) {
    window.open(blobUrl, '_blank');
  }

  addMember() {
    if (this.newMemberName.trim() && this.newMemberEmail.trim()) {
      this.members.push({ name: this.newMemberName, email: this.newMemberEmail });
      this.newMemberName = '';
      this.newMemberEmail = '';
    }
  }

  removeMember(index: number) {
    this.members.splice(index, 1);
  }


  closeDialog() {
    this.displayDialog = false;
   }

  onSubmit() {
    console.log('Project Submitted', {
      selectedProjectType: this.selectedProjectType,
      projectName: this.projectName,
      description: this.description,
      startDate: this.startDate,
      endDate: this.endDate,
      selectedColor: this.selectedColor,
      members: this.members,
      attachments: this.attachmentPreviews,
      logoPreview: this.logoPreview
    });
  }
}
