import { Component, OnInit } from '@angular/core';
import { Workflow, WorkflowInterface } from '../../models/workflow';

@Component({
  selector: 'app-list-worklow',
  templateUrl: './list-worklow.component.html',
  styleUrls: ['./list-worklow.component.css']
})
export class ListWorklowComponent implements OnInit 
{

  workflowData: WorkflowInterface[] =  []

  gridColumns = 3;

  constructor() { }

  ngOnInit(): void 
  {
    this.workflowData = [
      {
        name: "i-Banking",
        description: "",
        organisation: "",
        createdTime: new Date(),
        lastUpdatedTime: new Date()
      },
      {
        name: "i-Shop",
        description: "",
        organisation: "Stagiaires Innov",
        createdTime: new Date(),
        lastUpdatedTime: new Date()
      },
      {
        name: "i-School",
        description: "",
        organisation: "",
        createdTime: new Date(),
        lastUpdatedTime: new Date()
      },
      {
        name: "i-Flow",
        description: "",
        organisation: "",
        createdTime: new Date(),
        lastUpdatedTime: new Date()
      },
    ]
  }


}
