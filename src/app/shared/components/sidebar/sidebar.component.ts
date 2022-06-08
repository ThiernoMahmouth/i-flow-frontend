import { Component, OnInit } from '@angular/core';
import { NAVBAR_DATA } from './nav-data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit 
{
  navbarData = NAVBAR_DATA;
  
  constructor() { }

  ngOnInit(): void
  {
  }

}
