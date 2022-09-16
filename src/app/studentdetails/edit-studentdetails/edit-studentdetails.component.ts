import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { studentdetail } from 'src/app/models/student.models';
import { StudentsService } from 'src/app/services/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-studentdetails',
  templateUrl: './edit-studentdetails.component.html',
  styleUrls: ['./edit-studentdetails.component.css'],
})
export class EditStudentdetailsComponent implements OnInit {
  studentDetails: studentdetail = {
    id: 0,
    name: '',
    email: '',
    department: '',
    phone: 0,
    isActive: true,
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
