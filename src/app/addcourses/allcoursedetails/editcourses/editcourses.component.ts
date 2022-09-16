import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { courseDetails } from 'src/app/models/course.model';
import { StudentsService } from '../../../services/students.service';

@Component({
  selector: 'app-editcourses',
  templateUrl: './editcourses.component.html',
  styleUrls: ['./editcourses.component.css'],
})
export class EditcoursesComponent implements OnInit {
  courseDetails: courseDetails = {
    courseId: 0,
    courseName: '',
    courseFees: 0,
    isDeleted: true,
    isActive: true,
  };

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const courseId: any = params.get('id');
        if (courseId) {
          this.studentService.getCourse(courseId).subscribe({
            next: (response) => {
              this.courseDetails = response;
            },
          });
        }
      },
    });
  }

  updateCourse() {
    this.studentService
      .updateCourse(this.courseDetails.courseId, this.courseDetails)
      .subscribe({
        next: (response) => {
          this.router.navigate(['coursedetails']);
        },
      });
  }

  deleteCourse(courseId: any) {
    this.studentService.deleteCourse(courseId).subscribe({
      next: (response) => {
        this.router.navigate(['studentdetails']);
      },
    });
  }
}
