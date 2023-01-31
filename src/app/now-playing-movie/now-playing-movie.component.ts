import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../Model/movie';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-now-playing-movie',
  templateUrl: './now-playing-movie.component.html',
  styleUrls: ['./now-playing-movie.component.css']
})
export class NowPlayingMovieComponent implements OnInit {

  nowplayingMovie !: Movie;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getNowPlaying();
  }

  getNowPlaying(){
    this.dataService.getNowPlaying().subscribe(res=>{
      this.nowplayingMovie = this.modifyData(res);
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
