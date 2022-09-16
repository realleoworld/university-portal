import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { courseDetails } from '../models/course.model';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-addcourses',
  templateUrl: './addcourses.component.html',
  styleUrls: ['./addcourses.component.css'],
})
export class AddcoursesComponent implements OnInit {
  course: courseDetails = {
    courseId: 0,
    courseName: '',
    courseFees: 0,
    isDeleted: true,
    isActive: true,
  };

  constructor(
    private studentService: StudentsService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  courses() {
    this.studentService.course(this.course).subscribe({
      next: (course) => {
        //alert(JSON.stringify(course));
        alert(course);
        //console.log(JSON.stringify(course));
        //console.log(course);
        this.router.navigate(['courseDetails']);
      },
    });
  }
}
