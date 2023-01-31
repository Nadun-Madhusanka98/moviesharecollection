import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../Model/movie';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieid : Number | undefined
  nowplayingmovieDetails !: Movie
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.movieid = this.dataService.getMovieId();
    this.getNowPlayingMovieDetails();
  }

  getNowPlayingMovieDetails(){
    this.dataService.getNowPlaying().subscribe(res=>{
      this.nowplayingmovieDetails = this.modifyData(res);
    }, err=>{
      console.log('Error While fetching Now Playing Movies .',err);
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
