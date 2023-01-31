import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../Model/movie';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-top-rated-movie-details',
  templateUrl: './top-rated-movie-details.component.html',
  styleUrls: ['./top-rated-movie-details.component.css']
})
export class TopRatedMovieDetailsComponent implements OnInit {

  movieid : Number | undefined
  topratedmovieDetails !: Movie
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.movieid = this.dataService.getMovieId();
    this.getTopRatedMovie();
  }

  getTopRatedMovie(){
    this.dataService.getTopRatedMovie().subscribe(res=>{
      this.topratedmovieDetails = this.modifyData(res);
    }, err=>{
      console.log('Error While fetching Top Rated Movies .',err);
    })
  }
  modifyData(movies: Movie): Movie {
    if(movies.results){
      movies.results.forEach(element=>{
        element.backdrop_path = 'https://image.tmdb.org/t/p/original'+element.backdrop_path+'?api_key='+environment.api_key;
        if(!element.title){
          element.title = element?.name;
        }
      })
    }
    return movies;
  }
}
