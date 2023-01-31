import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchMovieTVShowComponent } from './search-movie-tvshow.component';
import { DataService } from '../Service/data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Movie } from '../Model/movie';

describe('SearchMovieTVShowComponent', () => {
let component: SearchMovieTVShowComponent;
let fixture: ComponentFixture<SearchMovieTVShowComponent>;
let dataService: DataService;

beforeEach(async(() => {
TestBed.configureTestingModule({
imports: [HttpClientTestingModule],
declarations: [SearchMovieTVShowComponent],
providers: [DataService]
})
.compileComponents();
}));

beforeEach(() => {
fixture = TestBed.createComponent(SearchMovieTVShowComponent);
component = fixture.componentInstance;
dataService = TestBed.get(DataService);
spyOn(dataService, 'getSearchResult').and.returnValue(of({} as Movie));
fixture.detectChanges();
});

it('should create', () => {
expect(component).toBeTruthy();
});

it('should call getSearchResult on init', () => {
component.ngOnInit();
expect(dataService.getSearchResult).toHaveBeenCalled();
});

});
