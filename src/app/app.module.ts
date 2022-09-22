import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { AddStudentComponent } from './studentdetails/add-student/add-student.component';
import { FormsModule } from '@angular/forms';
import { EditStudentdetailsComponent } from './studentdetails/edit-studentdetails/edit-studentdetails.component';
import { CoursedetailsComponent } from './addcourses/allcoursedetails/coursedetails/coursedetails.component';
import { AddcoursesComponent } from './addcourses/addcourses.component';
import { EditcoursesComponent } from './addcourses/allcoursedetails/editcourses/editcourses.component';
import { EachstudentComponent } from './eachstudent/eachstudent.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    DashboardComponent,
    SignupComponent,
    SigninComponent,
    StudentdetailsComponent,
    AddStudentComponent,
    EditStudentdetailsComponent,
    CoursedetailsComponent,
    AddcoursesComponent,
    EditcoursesComponent,
    EachstudentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
