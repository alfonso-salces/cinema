import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailPage } from './pages/movie-detail/movie-detail.page';
import { MoviesListPage } from './pages/movies-list/movies-list.page';

const routes: Routes = [
  {
    path: '',
    component: MoviesListPage,
  },
  {
    path: 'create-movie',
    component: MovieDetailPage,
  },
  {
    path: 'edit-movie:id',
    component: MovieDetailPage,
  },
  {
    path: 'movie-detail/:id',
    component: MovieDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class MoviesRoutingModule {}
