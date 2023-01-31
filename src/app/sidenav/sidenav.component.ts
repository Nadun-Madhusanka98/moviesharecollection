import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {

  faBars = faBars;
    toggeled: any = 1;
  @ViewChild('sidebarmenu') sidebarmenu!: ElementRef;

  constructor() {}

  ngOnInit(): void {}
  
    toggle(){
      if(this.toggeled){
        this.sidebarmenu.nativeElement.style.width = '0';
        this.toggeled = 0;
      }else{
        this.sidebarmenu.nativeElement.style.width = '300px';
        this.toggeled = 1;
      }
    }
  }
