import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  // alert: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  // this.alert=true

  alert() {
    alert('STUDENT PROFILE ALREADY EXISTS');
  }
}
