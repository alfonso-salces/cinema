import { ErrorHandler, NgModule } from '@angular/core';
import { GlobalErrorLogger } from './classes/error-logger/error-logger';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuComponent } from './components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { LoadingInterceptor } from './interceptors/loader.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MoviesService } from './services/menu.service';
import { coreFeatureKey, reducer } from './store/reducers/core.reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(coreFeatureKey, reducer),
  ],
  providers: [
    MoviesService,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorLogger,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },
  ],
  declarations: [SidebarComponent, MenuComponent],
  exports: [SidebarComponent, MenuComponent],
})
export class CoreModule {}
