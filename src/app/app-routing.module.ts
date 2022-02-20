import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'movies',
    loadChildren: () => import('../modules/movies/movies.module').then(m => m.MoviesModule)
  },
  {
    path: 'companies',
    loadChildren: () => import('../modules/companies/companies.module').then(m => m.CompaniesModule)
  },
  {
    path: 'actors',
    loadChildren: () => import('../modules/actors/actors.module').then(m => m.ActorsModule)
  },
  {
    path: '',
    redirectTo: 'actors',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
