import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ListFormsComponent } from './components/list-forms/list-forms.component';
import { AddFormComponent } from './components/add-form/add-form.component';

import { AdvancedDialogComponent, DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { FieldBarComponent } from './components/field-bar/field-bar.component';


import { MaterialComponentsModule } from 'src/app/utils/material.module';
import { FormComponent } from './components/form/form.component';



@NgModule({
  declarations: [
    ListFormsComponent,
    AddFormComponent,
    DynamicFormComponent,
    FieldBarComponent,
    AdvancedDialogComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule,
    MaterialComponentsModule
  ],
  exports: [
    AddFormComponent
  ]
})
export class FormulaireModule { }
