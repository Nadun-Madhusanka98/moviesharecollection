import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faUser = faUser;
  searchName : string = "";
  constructor(private router: Router, private dataService : DataService) { }

  ngOnInit(): void {
  }

  search(){
    if(this.searchName != ""){
      this.dataService.setSearchName(this.searchName);
      this.router.navigateByUrl('/search-movie');
    }else{
      this.router.navigateByUrl('/Home');
    }
    
  }

  logout(){
    this.router.navigateByUrl('/');
  }
}
