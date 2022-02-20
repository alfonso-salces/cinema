import { ErrorHandler } from '@angular/core';

export class GlobalErrorLogger implements ErrorHandler {
  handleError(error: any) {
    console.error(error);
  }
}
