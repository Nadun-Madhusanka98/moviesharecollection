import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  visibleSidebar1: any;
  
  items: MenuItem[] = [];
  
  constructor() {
  }

  ngOnInit(): void {
    this.items = [
            {
            label: 'File',
            icon:'pi pi-fw pi-file',
            items: [
                {
                    label: 'New',
                    icon:'pi pi-fw pi-plus',
                },
                {
                    label: 'Delete',
                    icon:'pi pi-fw pi-trash'
                },
                {
                    label: 'Export',
                    icon:'pi pi-fw pi-external-link'
                }
            ]
            },
            {
            label: 'Edit',
            icon:'pi pi-fw pi-pencil',
            items: [
                {
                    label: 'Left',
                    icon:'pi pi-fw pi-align-left'
                },
                {
                    label: 'Right',
                    icon:'pi pi-fw pi-align-right'
                },
                {
                    label: 'Center',
                    icon:'pi pi-fw pi-align-center'
                },
                {
                    label: 'Justify',
                    icon:'pi pi-fw pi-align-justify'
                }
            ]
            },
            {
            label: 'Users',
            icon:'pi pi-fw pi-user',
            items: [
                {
                    label: 'New',
                    icon:'pi pi-fw pi-user-plus',

                },
                {
                    label: 'Delete',
                    icon:'pi pi-fw pi-user-minus',
                },
                {
                    label: 'Search',
                    icon:'pi pi-fw pi-users',
                }
            ]
            },
            {
            label: 'Events',
            icon:'pi pi-fw pi-calendar',
            items: [
                {
                    label: 'Edit',
                    icon:'pi pi-fw pi-pencil',

                },
                {
                    label: 'Archieve',
                    icon:'pi pi-fw pi-calendar-times',
                }
            ]
            }
        ]
    }
  }
