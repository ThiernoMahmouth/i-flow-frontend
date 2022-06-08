import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialComponentsModule } from 'src/app/utils/material.module';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    
    MaterialComponentsModule

  ]
})
export class HomeModule {}
