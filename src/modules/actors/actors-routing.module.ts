import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorsPage } from './actors.page';

const routes: Routes = [
  {
    path: '',
    component: ActorsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ActorsRoutingModule {}
