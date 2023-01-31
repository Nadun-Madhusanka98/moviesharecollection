import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../Model/movie';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.css']
})
export class TopRatedMoviesComponent implements OnInit {

  topratedMovie !: Movie;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getTopRatedMovie();
  }

  getTopRatedMovie(){
    this.dataService.getTopRatedMovie().subscribe(res=>{
      this.topratedMovie = this.modifyData(res);
    }, err=>{
      console.log('Error While fetching Upcoming Movies.',err);
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
