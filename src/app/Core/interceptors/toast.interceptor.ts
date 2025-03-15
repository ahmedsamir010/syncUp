import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { throwError } from 'rxjs';

export const toastInterceptor: HttpInterceptorFn = (req, next) => {
  const toast = inject(MessageService);
  const translate = inject(TranslateService);

  return next(req).pipe(
    tap({
      next: (event) => {
        if (event instanceof HttpResponse && event.status === 200) {
          if (req.method === 'POST') {
            toast.add({
              severity: 'success',
              summary: translate.instant('Created'),
              detail: translate.instant('Content created successfully'),
            });
          } else if (req.method === 'PUT') {
            toast.add({
              severity: 'success',
              summary: translate.instant('Updated'),
              detail: translate.instant('Content updated successfully'),
            });
          } else if (req.method === 'DELETE') {
            toast.add({
              severity: 'success',
              summary: translate.instant('Deleted'),
              detail: translate.instant('Content deleted successfully'),
            });
          }
        }
      },
    }),
    catchError((error) => {
      toast.add({
        severity: 'error',
        summary: translate.instant('Error'),
        detail: translate.instant('An error occurred. Please try again.'),
      });
      return throwError(() => error);
    })
  );
};
