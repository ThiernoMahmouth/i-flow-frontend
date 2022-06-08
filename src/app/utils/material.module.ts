import { NgModule } from '@angular/core';

import {MatMenuModule, } from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';



const MaterialComponents =
[
  MatMenuModule, MatToolbarModule, MatIconModule, MatDialogModule, 
  MatTableModule, MatTabsModule, MatSortModule,MatPaginatorModule, MatCardModule, 
  MatFormFieldModule, MatSidenavModule, MatListModule, MatDividerModule,
  MatInputModule, MatButtonModule, MatExpansionModule, MatStepperModule, MatSelectModule
]

@NgModule({ 
  imports: 
  [
    MaterialComponents
  ],
  exports:
  [
    MaterialComponents
  ]
})
export class MaterialComponentsModule { }
