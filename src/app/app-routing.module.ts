import { NgModule } from '@angular/core';
//import { Title } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { AddFormComponent } from './layout/forms/components/add-form/add-form.component';
import { ListFormsComponent } from './layout/forms/components/list-forms/list-forms.component';
import { HomeComponent } from './layout/home/home.component';
import { TeamsComponent } from './layout/teams/teams.component';
import { AddWorkflowComponent } from './layout/workflows/components/add-workflow/add-workflow.component';
import { ListWorklowComponent } from './layout/workflows/components/list-worklow/list-worklow.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'forms', component: ListFormsComponent},
      { path: 'add-form', component: AddFormComponent},
      { path: 'teams', component: TeamsComponent},
      { path: 'workflows', component: ListWorklowComponent},
      { path: 'add-workflow', component: AddWorkflowComponent},
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  }
  /*{
    path: '',
    component: LoginComponent
  }*/
];

/*
export class TemplatePageTitleStrategy extends TitleStrategy 
{
  constructor(private readonly title: Title) 
  {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) 
  {
    const title = this.buildTitle(routerState);
    if (title !== undefined) 
    {
      this.title.setTitle(`My Application | ${title}`);
    }
  }
}
*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  /*
  providers:[
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy}
  ]
  */
})
export class AppRoutingModule {}
