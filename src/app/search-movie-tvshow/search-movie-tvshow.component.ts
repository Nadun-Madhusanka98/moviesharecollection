import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../Model/movie';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-search-movie-tvshow',
  templateUrl: './search-movie-tvshow.component.html',
  styleUrls: ['./search-movie-tvshow.component.css']
})
export class SearchMovieTVShowComponent implements OnInit {

  searchMovieTV !: Movie;

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.getSearchResult();

  }

  getSearchResult(){
    this.dataService.getSearchResult().subscribe(res=>{
      this.searchMovieTV = this.modifyData(res);
    }, err=>{
      console.log('Error While fetching Search Results.',err);
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
