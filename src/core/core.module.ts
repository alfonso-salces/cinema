import { ErrorHandler, NgModule } from '@angular/core';
import { GlobalErrorLogger } from './classes/error-logger/error-logger';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuComponent } from './components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer, sidebarFeatureKey } from './store/reducers/sidebar.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(sidebarFeatureKey, reducer)
  ],
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
