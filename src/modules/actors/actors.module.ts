import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorsPage } from './actors.page';
import { ActorsRoutingModule } from './actors-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { actorsFeatureKey, reducer } from './store/reducers/actors.reducer';
import { ActorsEffects } from './store/effects/actors.effects';
import { ActorsService } from './services/actors.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ActorsPage],
  imports: [
    CommonModule,
    ActorsRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(actorsFeatureKey, reducer),
    EffectsModule.forFeature([ActorsEffects]),
  ],
  providers: [ActorsService]
})
export class ActorsModule {}
