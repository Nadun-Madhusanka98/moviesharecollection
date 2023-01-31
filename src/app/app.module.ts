import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

//Primeng Modules
import { ToolbarModule } from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {SplitButtonModule} from 'primeng/splitbutton';
import {SidebarModule} from 'primeng/sidebar';
import {PanelMenuModule} from 'primeng/panelmenu';



//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TopRatedMovieDetailsComponent } from './top-rated-movie-details/top-rated-movie-details.component';
import { NowPlayingMovieComponent } from './now-playing-movie/now-playing-movie.component';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { FormsModule } from '@angular/forms';
import { RegisterLoginComponent } from './register-login/register-login.component';
import { SearchMovieTVShowComponent } from './search-movie-tvshow/search-movie-tvshow.component';
import { SearchMovieDetailsComponent } from './search-movie-details/search-movie-details.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    DashboardComponent,
    ComingSoonComponent,
    MovieDetailsComponent,
    TopRatedMovieDetailsComponent,
    NowPlayingMovieComponent,
    TopRatedMoviesComponent,
    PopularMoviesComponent,
    RegisterLoginComponent,
    SearchMovieTVShowComponent,
    SearchMovieDetailsComponent
  ],

  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToolbarModule,
    ButtonModule,
    RippleModule,
    SplitButtonModule,
    SidebarModule,
    PanelMenuModule,
    FontAwesomeModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
