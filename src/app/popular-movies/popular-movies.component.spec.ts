import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PopularMoviesComponent } from './popular-movies.component';
import { DataService } from '../Service/data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Movie } from '../Model/movie';

describe('PopularMoviesComponent', () => {
let component: PopularMoviesComponent;
let fixture: ComponentFixture<PopularMoviesComponent>;
let dataService: DataService;

beforeEach(async(() => {
TestBed.configureTestingModule({
imports: [HttpClientTestingModule],
declarations: [ PopularMoviesComponent ],
providers: [DataService]
})
.compileComponents();
}));

beforeEach(() => {
fixture = TestBed.createComponent(PopularMoviesComponent);
component = fixture.componentInstance;
dataService = TestBed.get(DataService);
fixture.detectChanges();
});

it('should create', () => {
expect(component).toBeTruthy();
});

it('should call getPopularMovie and set popularMovie', () => {
let movie: Movie = {
  results: [{ title: 'test title', backdrop_path: 'test/path', name: 'movie name', id: 315162, adult: false, original_language: 'test Lan', original_title: 'test Title', overview: 'Test details', poster_path: 'test/posterpath', popularity: 5422.32, release_date: '2022/12/14', vote_average: 23.4, vote_count: 2444, video: false }],
  dates: {'maximum': '2022-12-14', 'minimum': '2022-12-14'},
  page: 0,
  total_pages: 0,
  total_results: 0
};
spyOn(dataService, 'getPopularMovie').and.returnValue(of(movie));
component.getPopularMovie();
expect(component.popularMovie).toEqual(movie);
});
});