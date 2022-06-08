import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Team } from '../structures/structures.component';

@Component({
  selector: 'app-add-update-team',
  templateUrl: './add-update-team.component.html',
  styleUrls: ['./add-update-team.component.css']
})
export class AddUpdateTeamComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddUpdateTeamComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Team,
  ) {}

  onClose(): void 
  {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
