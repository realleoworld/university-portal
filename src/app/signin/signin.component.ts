import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { courseDetails } from '../models/course.model';
import { studentdetail } from '../models/student.models';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  // alert: boolean = false;
  student: studentdetail = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    department: '',
    phone: null,
    isActive: false,
    password: '',
  };
  //course: courseDetails[] = [];

  constructor(
    private studentService: StudentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.studentService.authenticate(this.student).subscribe({
    //   next: (student) => {
    //     this.student = student;
    //     //this.coursesign = courses.length;
    //   },
    //   error: (response) => {
    //     console.log(response);
    //   },
    // });
  }

  students() {
    //console.log(this.student);
    this.studentService.authenticate(this.student).subscribe({
      next: (student) => {
        console.log('------', student);
        if (student) this.router.navigate([`eachstudent/${student.id}`]);
        else alert('Invalid credentials');
      },
    });
  }
}
