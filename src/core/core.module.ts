import { ErrorHandler, NgModule } from '@angular/core';
import { GlobalErrorLogger } from './classes/error-logger/error-logger';

@NgModule({
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorLogger,
    },
  ],
})
export class CoreModule {}
