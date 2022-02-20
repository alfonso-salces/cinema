import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActorsPage } from './actors.page';
import { ActorsRoutingModule } from './actors-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ActorsRoutingModule
  ],
  declarations: [ActorsPage]
})
export class ActorsModule {}
