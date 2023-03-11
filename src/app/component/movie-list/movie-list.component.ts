import { Component,OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/service/movie.service.service';

@Component({
  selector: 'app-root',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit{
  movieid="this.movies.id";
movies:any;
currentMovie=null;
currentIndex=-1;
title='';
values:any;
Movie = {
  id:'',
  title: '',
  description: '',
  published: false
};
submitted = false;

constructor(private movieservice:MovieServiceService){}
ngOnInit(){
  this.retrieveMovie();
}
retrieveMovie(){
  this.movieservice.getAll().subscribe(
    (data:any)=>{
      this.movies=data;
      console.log(data)
    },
  (error:any)=> {
    console.log(error);
  });
}
deleteMovie(movie: {id:any}){
  
  this.Movie.id=movie.id;
  console.log(this.movies.id);
}
deleteConfirm(){
  console.log(this.movies.id);
  this.movieservice.delete(this.Movie.id)
    .subscribe(
     response => {
      console.log(response);
        this.submitted = true;
        this.retrieveMovie();
       },
       error => {
         console.log(error);
       });
}
editMovie(movie:{id:any;},data:any){
  this.movies.id=movie.id;
  this.movies.title=data.title;
  this.movies.description=data.description;
  this.movies.published=data.published;
}
updateMovie(){
  const data = {
    title: this.movies.title,
    description: this.movies.description
  };

  this.movieservice.update(this.movies.id,data)
    .subscribe(
     response => {
      console.log(response);
        this.submitted = true;
        this.retrieveMovie();
       },
       error => {
         console.log(error);
       });
}
view(){
  this.movieid="movie.id";
}
}
