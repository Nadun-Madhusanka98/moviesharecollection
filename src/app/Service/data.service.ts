import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../Model/movie';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = 'https://api.themoviedb.org/3';
  movieid : Number | undefined;
  searchName: string = "";

  constructor(private http : HttpClient) { }

  setMovieId(id: Number | undefined){
    this.movieid = id;
  }

  getMovieId(){
    return this.movieid;
  }
  
  setSearchName(data: string){
    this.searchName = data;
  }
  getSearchName(){
    return this.searchName;
  }

  getSearchResult() : Observable<Movie>{
    return this.http.get<Movie>(this.url+'/search/multi?api_key='+environment.api_key+'&query='+this.getSearchName());
  }
  
  getLatestMovie() : Observable<any>{
    return this.http.get<any>(this.url+'/movie/now_playing?api_key='+environment.api_key+'&language=en-US&page=1');
  }

  getTrendingMovie() : Observable<Movie>{
    return this.http.get<Movie>(this.url+'/trending/all/week?api_key='+environment.api_key);
  }

  getPopularMovie() : Observable<Movie>{
    return this.http.get<Movie>(this.url+'/movie/popular?api_key='+environment.api_key);
  }

  getUpcomingMovie() : Observable<Movie>{
    return this.http.get<Movie>(this.url+'/movie/upcoming?api_key='+environment.api_key);
  }

  getTVShows() : Observable<Movie>{
    return this.http.get<Movie>(this.url+'/discover/tv?api_key='+environment.api_key);
  }

  getNowPlaying() : Observable<Movie>{
    return this.http.get<Movie>(this.url+'/movie/now_playing?api_key='+environment.api_key);
  }
 
  getTopRatedMovie() : Observable<Movie>{
    return this.http.get<Movie>(this.url+'/movie/top_rated?api_key='+environment.api_key);
  }

  getNowPlayingMovieDetails() : Observable<Movie>{
    var Mid = this.getMovieId()
    console.log(Mid);
    return this.http.get<Movie>(this.url+'/movie/'+Mid+'?api_key'+environment.api_key);
  }
  getSearchMovieDetails() : Observable<Movie>{
    var Mid = this.getMovieId()
    console.log(Mid);
    return this.http.get<Movie>(this.url+'/movie/'+Mid+'?api_key'+environment.api_key);
  }
}
