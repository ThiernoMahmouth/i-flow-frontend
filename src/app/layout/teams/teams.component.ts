import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { AddUpdateTeamComponent } from './components/add-update-team/add-update-team.component';




@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
  
export class TeamsComponent implements OnInit 
{
  

  gridColumns = 2;

  constructor(public dialog : MatDialog) { }

  ngOnInit(): void {  }

}
