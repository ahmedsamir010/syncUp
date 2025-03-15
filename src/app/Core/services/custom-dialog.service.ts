import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from 'primeng/dynamicdialog';

@Injectable({
  providedIn: 'root',
})
export class CustomDialogService {
  constructor(private dialogService: DialogService, private translate: TranslateService) {}

  open(data: { component: any; header: string; dialogData?: any }) {
    const { component, header, dialogData } = data;
    return this.dialogService.open(component, {
      header: this.translate.instant(header),  
      data: dialogData,
      dismissableMask: true,
      width: '700px',
      height:'100%'

    });
  }
}
