import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeaderComponent } from './header.component';
import { DataService } from '../Service/data.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      declarations: [ HeaderComponent ],
      providers: [ DataService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('searchName should be empty initially', () => {
    expect(component.searchName).toEqual('');
  });

  it('searchName should update with entered value', () => {
    component.searchName = 'Test';
    expect(component.searchName).toEqual('Test');
  });

  it('search function should be defined', () => {
    expect(component.search).toBeDefined();
  });

  it('logout function should be defined', () => {
    expect(component.logout).toBeDefined();
  });
});
