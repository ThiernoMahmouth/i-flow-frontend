import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, Observable } from 'rxjs';
import { Champ } from '../../models/Champ.model';
import { Form } from '../../models/Form.model';
import { Field } from '../field-bar/fieldType-data';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit 
{
  panelOpenState = true;

  @Input() fields !: Field[]
  @Input() form!: Form;
  champ !: Champ;

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void 
  {
    console.log(this.form.champs.length)
  }

  
  showAddDescriptionButton(i:number)
  {
    if (i === -1)
    {
      if (this.form.description === "")
        return false;
      else
        return this.form.description? false : true;
    }
    else
    {
      if (this.form.champs[i].description === "")
        return false;
      else
        return this.form.champs[i].description? false : true;
    }
  }

  showDescriptionField(i:number)
  {
    if (i === -1)
      this.form.description = "";
    else
      this.form.champs[i].description = "";
  }

  deleteField(index: number)
  {
    this.fields.splice(index, 1);
    this.form.champs.splice(index, 1);
  }

  openAdvancedDialog(index: number)
  {
    const dialogRef = this.dialog.open(AdvancedDialogComponent, {
      // width: '800px',
      width: '800px',
      data: this.form.champs[index]
    });

    dialogRef.afterClosed().subscribe(result => {
      this.form.champs[index] = result;
    });
  }
}


@Component({
  selector: 'app-advanced-dialog',
  templateUrl: './advanced-dialog.component.html',
  styleUrls: ['./advanced-dialog.component.css']
})
export class AdvancedDialogComponent
{
  stepperOrientation : Observable<StepperOrientation>

  descriptionFormGroup = this.formBuilder.group({

  })

  constructor(public dialogRef: MatDialogRef<AdvancedDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Champ,breakpointObserver: BreakpointObserver,
    private formBuilder : FormBuilder
  ) 
  {
    this.stepperOrientation = breakpointObserver
            .observe('(min-width: 800px)')
            .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  onClose(): void 
  {
    this.dialogRef.close();
  }
}
