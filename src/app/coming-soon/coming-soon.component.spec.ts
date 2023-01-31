import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComingSoonComponent } from './coming-soon.component';
import { DataService } from '../Service/data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Movie } from '../Model/movie';

describe('ComingSoonComponent', () => {
let component: ComingSoonComponent;
let fixture: ComponentFixture<ComingSoonComponent>;
let dataService: DataService;

beforeEach(async(() => {
TestBed.configureTestingModule({
imports: [HttpClientTestingModule],
declarations: [ ComingSoonComponent ],
providers: [DataService]
})
.compileComponents();
}));

beforeEach(() => {
fixture = TestBed.createComponent(ComingSoonComponent);
component = fixture.componentInstance;
dataService = TestBed.get(DataService);
fixture.detectChanges();
});

it('should create', () => {
expect(component).toBeTruthy();
});

it('should call getUpcomingMovie and set upcomingMovie', () => {
let movie: Movie = {
  results: [{ title: 'test title', backdrop_path: 'test/path', name: 'movie name', id: 315162, adult: false, original_language: 'test Lan', original_title: 'test Title', overview: 'Test details', poster_path: 'test/posterpath', popularity: 5422.32, release_date: '2022/12/14', vote_average: 23.4, vote_count: 2444, video: false }],
  dates: {'maximum': '2022-12-14', 'minimum': '2022-12-14'},
  page: 0,
  total_pages: 0,
  total_results: 0
};
spyOn(dataService, 'getUpcomingMovie').and.returnValue(of(movie));
component.getUpcomingMovie();
expect(component.upcomingMovie).toEqual(movie);
});
});