import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { studentdetail } from '../models/student.models';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-eachstudent',
  templateUrl: './eachstudent.component.html',
  styleUrls: ['./eachstudent.component.css'],
})
export class EachstudentComponent implements OnInit {
  studentDetails: studentdetail = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    department: '',
    phone: null,
    isActive: false,
    password: '',
  };
  courseDetails: any;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.studentService.getStudent(id).subscribe({
            next: (response) => {
              this.studentDetails = response;
            },
          });
        }
      },
    });
  }

  updateStudent() {
    this.studentService
      .updateStudent(this.studentDetails.id, this.studentDetails)
      .subscribe({
        next: (response) => {
          this.router.navigate(['studentdetails']);
        },
      });
  }

  deleteStudent(studentId: any) {
    this.studentService.deleteStudent(studentId).subscribe({
      next: (response) => {
        this.router.navigate(['coursedetails']);
      },
    });
  }
}
