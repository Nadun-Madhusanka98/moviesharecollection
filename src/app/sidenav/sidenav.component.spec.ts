/*
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavComponent } from './sidenav.component';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/
////////////////////////////
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SidenavComponent } from './sidenav.component';
import { By } from '@angular/platform-browser';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;
  let sidebarmenu: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    sidebarmenu = fixture.debugElement.query(By.css('.sidebarmenu'));
    component.sidebarmenu = sidebarmenu;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the sidebarmenu', () => {
    component.toggeled = 1;
    component.toggle();
    expect(component.toggeled).toBe(0);
    expect(component.sidebarmenu.nativeElement.style.width).toBe('0px');

    component.toggeled = 0;
    component.toggle();
    expect(component.toggeled).toBe(1);
    expect(component.sidebarmenu.nativeElement.style.width).toBe('300px');
  });
});
