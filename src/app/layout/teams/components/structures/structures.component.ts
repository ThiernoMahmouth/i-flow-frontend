import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUpdateTeamComponent } from '../add-update-team/add-update-team.component';

export interface Team
{
  name: string;
  nbProfils: number;
  nbUsers: number;
}

@Component({
  selector: 'app-structures',
  templateUrl: './structures.component.html',
  styleUrls: ['./structures.component.css']
})
export class StructuresComponent implements OnInit 
{
  teamData: Team[] =  []

  gridColumns = 2;

  constructor(public dialog : MatDialog) { }

  ngOnInit(): void 
  {
    this.teamData = [
      {
        name: "i-Banking",
        nbProfils: 3,
        nbUsers: 5
      },
      {
        name: "i-Shop",
        nbProfils: 5,
        nbUsers: 10
      },
      {
        name: "i-School",
        nbProfils: 2,
        nbUsers: 5
      },
      {
        name: "i-Flow",
        nbProfils: 1,
        nbUsers: 3
      },
    ]
  }

  openAddTeamDialog()
  {
    const dialogRef = this.dialog.open(AddUpdateTeamComponent, {
      width: '500px',
      data: { name: "", nbProfils: 0, nbUsers: 0 },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result.name != "")
        this.teamData.push(result);
    });
  }
}
