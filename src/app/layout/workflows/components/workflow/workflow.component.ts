import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Action } from '../../models/etape';
import { Workflow } from '../../models/workflow';
import { StageDialogComponent } from '../stage-dialog/stage-dialog.component';


@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent implements OnInit 
{
  @Input() wf !: Workflow;
  roles !: string[];
  etats !: string[];
  actions !: Action[];

  act !: Action;

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void 
  {
    this.roles = ["ADMIN", "USER"];
    this.etats = ["VALIDE", "EN ATTENTE", "INVALIDE"];
    this.actions = [];
    this.act = new Action("MAIL");
    this.act.icone = "mail_outline";
    this.actions.push(this.act);
    this.act = new Action("Validation");
    this.act.icone = "check";
    this.actions.push(this.act);
  }

  existsDescription()
  {
    return this.wf.description? true : false;
  }
  showDescriptionField()
  {
    this.wf.description=" "
    console.log(this.wf.description.length)

  }
  addStage()
  {
    const dialogRef = this.dialog.open(StageDialogComponent, {
      // width: '800px',
      width: '100%',
      data: { 
        numero: this.wf.nbEtapes + 1, 
        roles: this.roles, 
        etats: this.etats,
        actions: this.actions
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.wf.etapes.push(result);
    });
  }
}
