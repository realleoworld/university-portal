import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { courseDetails } from '../models/course.model';
import { studentdetail } from '../models/student.models';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  student: studentdetail = {
    id: 0,
    name: '',
    email: '',
    phone: null,
    department: '',
    isActive: true,
  };
  course: courseDetails[] = [];

  constructor(
    private studentService: StudentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.studentService.getAllCourse().subscribe({
      next: (courses) => {
        this.course = courses;
        //this.coursesign = courses.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  students() {
    this.studentService.student(this.student).subscribe({
      next: (student) => {
        console.log(student);
        this.router.navigate(['studentdetails']);
      },
    });
  }
}
