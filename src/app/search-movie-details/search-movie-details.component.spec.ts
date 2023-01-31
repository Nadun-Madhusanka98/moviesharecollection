import { SearchMovieDetailsComponent } from './search-movie-details.component';
import { DataService } from '../Service/data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Movie } from '../Model/movie';
import { of } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('SearchMovieDetailsComponent', () => {
  let component: SearchMovieDetailsComponent;
  let fixture: ComponentFixture<SearchMovieDetailsComponent>;
  let dataService: DataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    declarations: [ SearchMovieDetailsComponent ],
    providers: [DataService]
    })
    .compileComponents();
    }));
    
    beforeEach(() => {
    fixture = TestBed.createComponent(SearchMovieDetailsComponent);
    component = fixture.componentInstance;
    dataService = TestBed.get(DataService);
    spyOn(dataService, 'getMovieId').and.returnValue(123);
    fixture.detectChanges();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getSearchMovieDetails', () => {
    spyOn(dataService, 'getSearchMovieDetails').and.returnValue(of({ results: [{ id: 1, title: 'Movie 1', backdrop_path: 'test/path', name: 'movie name', adult: false, original_language: 'test Lan', original_title: 'test Title', overview: 'Test details', poster_path: 'test/posterpath', popularity: 5422.32, release_date: '2022/12/14', vote_average: 23.4, vote_count: 2444, video: false }], 
    dates: {'maximum': '2022-12-14', 'minimum': '2022-12-14'},
    page: 0,
    total_pages: 0,
    total_results: 0 }));
    spyOn(component, 'modifyData').and.returnValue({
      results: [{ id: 1, title: 'Movie 1', backdrop_path: 'test/path', name: 'movie name', adult: false, original_language: 'test Lan', original_title: 'test Title', overview: 'Test details', poster_path: 'test/posterpath', popularity: 5422.32, release_date: '2022/12/14', vote_average: 23.4, vote_count: 2444, video: false }],
      dates: {'maximum': '2022-12-14', 'minimum': '2022-12-14'},
      page: 0,
      total_pages: 0,
      total_results: 0
    });

    component.getSearchMovieDetails();

    expect(dataService.getSearchMovieDetails).toHaveBeenCalled();
    expect(component.modifyData).toHaveBeenCalled();
    expect(component.searchmovieDetails).toEqual({ results: [{ id: 1, title: 'Movie 1', backdrop_path: 'test/path', name: 'movie name', adult: false, original_language: 'test Lan', original_title: 'test Title', overview: 'Test details', poster_path: 'test/posterpath', popularity: 5422.32, release_date: '2022/12/14', vote_average: 23.4, vote_count: 2444, video: false }], 
    dates: {'maximum': '2022-12-14', 'minimum': '2022-12-14'},
    page: 0,
    total_pages: 0,
    total_results: 0 });
  });

  it('should call modifyData', () => {
    const movie: Movie = {
      results: [
        { id: 1, title: 'Movie 1', backdrop_path: 'test/path', name: 'movie name', adult: false, original_language: 'test Lan', original_title: 'test Title', overview: 'Test details', poster_path: 'test/posterpath', popularity: 5422.32, release_date: '2022/12/14', vote_average: 23.4, vote_count: 2444, video: false },
        { id: 1, title: 'Movie 1', backdrop_path: 'test/path', name: 'movie name', adult: false, original_language: 'test Lan', original_title: 'test Title', overview: 'Test details', poster_path: 'test/posterpath', popularity: 5422.32, release_date: '2022/12/14', vote_average: 23.4, vote_count: 2444, video: false }
      ],
      dates: {'maximum': '2022-12-14', 'minimum': '2022-12-14'},
      page: 0,
      total_pages: 0,
      total_results: 0
    };
  });
});
