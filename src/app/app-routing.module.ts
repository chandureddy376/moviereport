import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddMovieComponent } from './component/add-movie/add-movie.component';
import { MovieDetailsComponent } from './component/movie-details/movie-details.component';
import { MovieListComponent } from './component/movie-list/movie-list.component';

const routes: Routes = [
  {path:'',redirectTo:'chandu',pathMatch:"full"},
  {path:'add-movie',component:AddMovieComponent},
  {path:'movie-list',component:MovieListComponent},
  {path:'movie-details/:id',component:MovieDetailsComponent},
  {path:'Add-Movie',component:AddMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
