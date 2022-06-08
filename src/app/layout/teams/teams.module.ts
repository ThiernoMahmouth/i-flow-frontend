import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUpdateTeamComponent } from './components/add-update-team/add-update-team.component';
import { TeamsComponent } from './teams.component';
import { ProfilDialogComponent, ProfilsComponent } from './components/profils/profils.component';
import { StructuresComponent } from './components/structures/structures.component';
import { UsersComponent, UserDialogComponent } from './components/users/users.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialComponentsModule } from 'src/app/utils/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    TeamsComponent,
    AddUpdateTeamComponent,  
    UsersComponent,
    UserDialogComponent,
    ProfilsComponent,
    StructuresComponent,
    ProfilDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    
    MaterialComponentsModule
  ]
})
export class TeamsModule { }
