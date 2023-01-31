import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../Model/movie';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-search-movie-details',
  templateUrl: './search-movie-details.component.html',
  styleUrls: ['./search-movie-details.component.css']
})
export class SearchMovieDetailsComponent implements OnInit {

  movieid : Number | undefined
  searchmovieDetails !: Movie
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.movieid = this.dataService.getMovieId();
    this.getSearchMovieDetails();
  }

  getSearchMovieDetails(){
    this.dataService.getSearchMovieDetails().subscribe(res=>{
      this.searchmovieDetails = this.modifyData(res);
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
