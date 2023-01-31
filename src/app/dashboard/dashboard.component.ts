import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../Model/movie';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movieid = 315162;
  latestMovie : any;
  popularMovie !: Movie;
  trendingMovie !: Movie;
  upcomingMovie !: Movie;
  nowplaying !: Movie;
  tvshows !: Movie;
  toprated !: Movie;

  constructor(private dataService : DataService) { }

  ngOnInit(): void {

    this.dataService.setMovieId(this.movieid);
    this.getPopularMovie();
    this.getUpcomingMovie();
    this.getTVShows();
    this.getNowPlaying();
    this.getTopRatedMovie();
  }

  getNowPlaying(){
      this.dataService.getNowPlaying().subscribe(res=>{
        this.nowplaying = this.modifyData(res);
      }, err=>{
        console.log('Error While fetching Now Playing Movies .',err);
      })
    }

  getPopularMovie(){
    this.dataService.getPopularMovie().subscribe(res=>{
      this.popularMovie = this.modifyData(res);
    }, err=>{
      console.log('Error While fetching Popular Movie.',err);
    })
  }

  getTopRatedMovie(){
    this.dataService.getTopRatedMovie().subscribe(res=>{
      this.toprated = this.modifyData(res);
    }, err=>{
      console.log('Error While fetching Top Rated Movie.',err);
    })
  }

  getUpcomingMovie(){
    this.dataService.getUpcomingMovie().subscribe(res=>{
      this.upcomingMovie = this.modifyData(res);
    }, err=>{
      console.log('Error While fetching Upcoming Movie.',err);
    })
  }

  getTVShows(){
    this.dataService.getTVShows().subscribe(res=>{
      this.tvshows = this.modifyData(res);
    }, err=>{
      console.log('Error While fetching TV Shows .',err);
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
