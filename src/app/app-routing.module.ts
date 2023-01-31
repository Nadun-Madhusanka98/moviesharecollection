import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopRatedMovieDetailsComponent } from './top-rated-movie-details/top-rated-movie-details.component';
import { NowPlayingMovieComponent } from './now-playing-movie/now-playing-movie.component';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { RegisterLoginComponent } from './register-login/register-login.component';
import { SearchMovieTVShowComponent } from './search-movie-tvshow/search-movie-tvshow.component';
import { SearchMovieDetailsComponent } from './search-movie-details/search-movie-details.component';


const routes: Routes = [
  { path: '', component: RegisterLoginComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'Home', component: DashboardComponent },
  { path: 'now-playing-movie', component: NowPlayingMovieComponent },
  { path: 'top-rated-movies', component: TopRatedMoviesComponent },
  { path: 'coming-soon', component: ComingSoonComponent },
  { path: 'movie-details', component: MovieDetailsComponent },
  { path: 'top-rated-movie-details', component: TopRatedMovieDetailsComponent },
  { path: 'popular-movie', component: PopularMoviesComponent },
  { path: 'search-movie', component: SearchMovieTVShowComponent },
  { path: 'search-movie-details', component: SearchMovieDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
