import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursedetailsComponent } from './addcourses/allcoursedetails/coursedetails/coursedetails.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HomepageComponent } from './homepage/homepage.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AddStudentComponent } from './studentdetails/add-student/add-student.component';
import { EditStudentdetailsComponent } from './studentdetails/edit-studentdetails/edit-studentdetails.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { EditcoursesComponent } from './addcourses/allcoursedetails/editcourses/editcourses.component';
import { AddcoursesComponent } from './addcourses/addcourses.component';
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'coursedetails/add/:id', component: AddcoursesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'studentdetails/add', component: AddStudentComponent },
  { path: 'studentdetails', component: StudentdetailsComponent },
  { path: 'studentdetails/edit/:id', component: EditStudentdetailsComponent },
  { path: 'coursedetails', component: CoursedetailsComponent },
  { path: 'coursedetails/edit/:id', component: EditcoursesComponent },
  { path: 'addcourses', component: AddcoursesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
