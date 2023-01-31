import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';
import { environment } from 'src/environments/environment';
import { Movie } from '../Model/movie';

describe('DataService', () => {
let service: DataService;
let httpMock: HttpTestingController;

beforeEach(() => {
TestBed.configureTestingModule({
imports: [HttpClientTestingModule],
providers: [DataService]
});
service = TestBed.get(DataService);
httpMock = TestBed.get(HttpTestingController);
});

afterEach(() => {
  httpMock.verify();
  });
  
  it('should be created', () => {
  expect(service).toBeTruthy();
  });
  
  it('should set movie id', () => {
  service.setMovieId(1);
  expect(service.getMovieId()).toEqual(1);
  });
  
  it('should get latest movie', () => {
  const dummyMovies: any[] = [
  { id: 1, title: 'Movie 1' },
  { id: 2, title: 'Movie 2' }
  ];
  service.getLatestMovie().subscribe(movies => {
    expect(movies.length).toBe(2);
    expect(movies).toEqual(dummyMovies);
  });
  
  const req = httpMock.expectOne(`${service.url}/movie/now_playing?api_key=${environment.api_key}&language=en-US&page=1`);
  expect(req.request.method).toBe('GET');
  req.flush(dummyMovies);
});

});