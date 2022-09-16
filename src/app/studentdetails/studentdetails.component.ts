import { Component, OnInit } from '@angular/core';
import { studentdetail } from '../models/student.models';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css'],
})
export class StudentdetailsComponent implements OnInit {
  activeCount: any;
  inactiveCount: any;
  onSave() {
    throw new Error('Method not implemented.');
  }
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
  totalCount: any;

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.studentsService.getAllStudents().subscribe({
      next: (students) => {
        this.student = students;
        this.totalCount = students.length;
        this.activeCount = students.filter(
          (student) => student.isActive == true
        ).length;
        this.inactiveCount = students.filter(
          (student) => student.isActive == false
        ).length;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}
