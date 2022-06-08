import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListWorklowComponent } from './components/list-worklow/list-worklow.component';
import { MaterialComponentsModule } from 'src/app/utils/material.module';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddWorkflowComponent } from './components/add-workflow/add-workflow.component';
import { FormulaireModule } from '../forms/formulaire.module';
import { WorkflowComponent } from './components/workflow/workflow.component';
import { EtatDialogComponent, StageDialogComponent } from './components/stage-dialog/stage-dialog.component';



@NgModule({
  declarations: [
    ListWorklowComponent,
    AddWorkflowComponent,
    WorkflowComponent,
    StageDialogComponent,
    EtatDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialComponentsModule,
    FormulaireModule
  ]
})
export class WorkflowsModule { }
