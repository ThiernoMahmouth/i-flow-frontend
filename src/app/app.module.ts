import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

import { HomeModule } from './layout/home/home.module';
import { FormulaireModule } from './layout/forms/formulaire.module';
import { AuthModule } from './auth/auth.module';
import { MaterialComponentsModule } from './utils/material.module';
import { TeamsModule } from './layout/teams/teams.module';
import { WorkflowsModule } from './layout/workflows/workflows.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
    FormulaireModule,
    SharedModule,
    AuthModule,
    TeamsModule,
    WorkflowsModule,
    MaterialComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
