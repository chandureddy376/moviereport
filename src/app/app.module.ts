import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMovieComponent } from './component/add-movie/add-movie.component';
import { MovieListComponent } from './component/movie-list/movie-list.component';
import { MovieDetailsComponent } from './component/movie-details/movie-details.component';


@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    MovieListComponent,
    MovieDetailsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
