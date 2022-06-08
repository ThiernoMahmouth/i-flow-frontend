import { Component, OnInit } from '@angular/core';
import { Workflow } from '../../models/workflow';

@Component({
  selector: 'app-add-workflow',
  templateUrl: './add-workflow.component.html',
  styleUrls: ['./add-workflow.component.css']
})
export class AddWorkflowComponent implements OnInit 
{

  workflow !: Workflow
  constructor() { }

  ngOnInit(): void 
  {
    this.workflow = new Workflow();
    console.log(this.workflow)
  }

}
