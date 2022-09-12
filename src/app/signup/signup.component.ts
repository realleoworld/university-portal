import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { studentdetail } from '../models/student.models';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  student: studentdetail = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    department: '',
  };

  constructor(
    private studentService: StudentsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  students() {
    this.studentService.student(this.student).subscribe({
      next: (student) => {
        this.router.navigate(['studentdetails']);
      },
    });

  }
}
