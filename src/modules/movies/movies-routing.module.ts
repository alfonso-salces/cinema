import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMoviePage } from './pages/create-movie/create-movie.page';
import { MoviesListPage } from './pages/movies-list/movies-list.page';

const routes: Routes = [
  {
    path: '',
    component: MoviesListPage,
  },
  {
    path: 'create-movie',
    component: CreateMoviePage,
  },
  {
    path: 'edit-movie:id',
    component: CreateMoviePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class MoviesRoutingModule {}
