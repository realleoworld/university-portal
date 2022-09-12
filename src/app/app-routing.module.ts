import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HomepageComponent } from './homepage/homepage.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AddStudentComponent } from './studentdetails/add-student/add-student.component';
import { EditStudentdetailsComponent } from './studentdetails/edit-studentdetails/edit-studentdetails.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'studentdetails/add', component: AddStudentComponent },
  { path: 'studentdetails', component: StudentdetailsComponent },
  { path: 'studentdetails/edit/:id', component: EditStudentdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
