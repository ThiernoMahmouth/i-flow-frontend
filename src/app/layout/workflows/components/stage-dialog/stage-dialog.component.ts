import { BreakpointObserver } from "@angular/cdk/layout";
import { StepperOrientation } from "@angular/cdk/stepper";
import { Component, Inject } from "@angular/core";
import { Validators, FormArray, FormControl, FormBuilder } from "@angular/forms";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Observable, map } from "rxjs";
import { ProfilDialogComponent } from "src/app/layout/teams/components/profils/profils.component";
import { Etape, EtapeInputData, TransitionType } from "../../models/etape";
import { DROIT } from "../../models/workflow";



@Component({
    selector: 'app-stage-dialog',
    templateUrl: './stage-dialog.component.html',
    styleUrls: ['./stage-dialog.component.css']
  })

  /******************************************************************************** */

export class StageDialogComponent
{
    droits = DROIT;
    typesTransition = TransitionType;

    etape !: Etape 


    descriptionFormGroup = this._formBuilder.group({
      firstCtrl: [
            'nom', Validators.required,
    ],
    });
    intervenantFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });
    actionsFormGroup = this._formBuilder.group({
        actionsCtrl: ['', Validators.required],
      });

    intervenantArray = new FormArray([new FormControl('', Validators.required)]);
    actionsArray  = new FormArray([new FormControl('', Validators.required)]);

    stepperOrientation: Observable<StepperOrientation>;
    constructor(public dialog: MatDialog ,public dialogRef: MatDialogRef<StageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EtapeInputData ,private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver)
    {
        this.stepperOrientation = breakpointObserver
            .observe('(min-width: 800px)')
            .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
        
        this.etape = new Etape(this.data.numero);
    
    }

    onClose(): void
    {
      this.dialogRef.close();
    }

    onSave()
    {
        this.etape.nom = this.descriptionFormGroup.get('nom')?.value
        return this.etape;
    }
    addIntervenantControl()
    {
      this.intervenantArray.push(new FormControl('', Validators.required));
    }
    removeIntervenantControl(index: number)
    {
      this.intervenantArray.removeAt(index);
    }
    addActionControl()
    {
      this.actionsArray.push(new FormControl('', Validators.required));
    }
    removeActionControl(index: number)
    {
      this.actionsArray.removeAt(index);
    }

    openAddProfilDialog()
    {
        const dialogRef = this.dialog.open(ProfilDialogComponent, {
        width: '275px',
        data: "",
        });
        dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        if (result != "")
        {
            this.data.roles.push(result)
        }
        });
    }

    openAddEtatDialog()
    {
        const dialogRef = this.dialog.open(EtatDialogComponent, {
            width: '275px',
            data: "",
        });
        dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        if (result != "")
        {
            this.data.etats.push(result)
        }
        });
    }

    handleSelect(event: any)
    {
        if(event.value === "NULL")
        {

            this.openAddProfilDialog();
        }
    }
    handleSelectEtat(event: any)
    {
        console.log(event.value);
        
    }

    isManuelle(transition:any)
    {
        return transition.value === "MANUELLE" ? true:false; 
    }
    isAutomatique(transition:any)
    {
        return transition.value === "AUTOMATIQUE" ? true:false; 
    }
    isSousCondition(transition:any)
    {
        return transition.value === "SOUS CONDITIONS" ? true:false; 
    }

    activer()
    {
        return this.descriptionFormGroup.valid && this.intervenantFormGroup.valid && this.thirdFormGroup.valid && this.actionsFormGroup.valid
    }
}

@Component({
    selector: 'app-etat-dialog',
    templateUrl: './etat-dialog.component.html',
    styleUrls: ['./etat-dialog.component.css']
  })
export class EtatDialogComponent
{

    constructor(public dialogRef: MatDialogRef<ProfilDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: string,
      ) {}

    onClose(): void 
    {
        this.dialogRef.close();
    }
}