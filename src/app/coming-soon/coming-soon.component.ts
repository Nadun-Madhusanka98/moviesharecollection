import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../Model/movie';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {

  upcomingMovie !: Movie;
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getUpcomingMovie();
  }

  getUpcomingMovie(){
    this.dataService.getUpcomingMovie().subscribe(res=>{
      this.upcomingMovie = this.modifyData(res);
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
