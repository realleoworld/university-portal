import { Component, OnInit } from '@angular/core';
import { courseDetails } from '../../../models/course.model';
import { StudentsService } from '../../../services/students.service';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css'],
})
export class CoursedetailsComponent implements OnInit {
  onSave() {
    throw new Error('Method not implemented.');
  }

  course: courseDetails[] = [];
  coursesign: any;

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.studentsService.getAllCourse().subscribe({
      next: (courses) => {
        this.course = courses;
        this.coursesign = courses.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}
