import { Component, OnInit } from '@angular/core';
import { studentdetail } from '../models/student.models';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css'],
})
export class StudentdetailsComponent implements OnInit {
  student: studentdetail[] = [
    // {
    //   id: 'tgjtjtjtjttj',
    //   name: 'john doe',
    //   email: 'gkkghk',
    //   phone: 89899000000,
    //   department: 'science',
    // },
    // {
    //   id: 'tgjtjtjtjttj',
    //   name: 'john doe',
    //   email: 'gkkghk',
    //   phone: 89899000000,
    //   department: 'science',
    // },
    // {
    //   id: 'tgjtjtjtjttj',
    //   name: 'john doe',
    //   email: 'gkkghk',
    //   phone: 89899000000,
    //   department: 'science',
    // },
  ];

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.studentsService.getAllStudents().subscribe({
      next: (students) => {
        this.student = students;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}
