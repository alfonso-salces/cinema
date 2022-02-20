import { ErrorHandler, NgModule } from '@angular/core';
import { GlobalErrorLogger } from './classes/error-logger/error-logger';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuComponent } from './components/menu/menu.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorLogger,
    },
  ],
  declarations: [SidebarComponent, MenuComponent],
  exports: [SidebarComponent, MenuComponent]
})
export class CoreModule {}
