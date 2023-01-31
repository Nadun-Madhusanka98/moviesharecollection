import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../Model/movie';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {

  popularMovie !: Movie;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getPopularMovie();
  }

  getPopularMovie(){
    this.dataService.getPopularMovie().subscribe(res=>{
      this.popularMovie = this.modifyData(res);
    }, err=>{
      console.log('Error While fetching Popular Movies.',err);
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
