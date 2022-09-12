import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { studentdetail } from '../models/student.models';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  getAllStudents(): Observable<studentdetail[]> {
    return this.http.get<studentdetail[]>(this.baseApiUrl + '/api/Student');
  }

  student(student: studentdetail): Observable<studentdetail> {
    student.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<studentdetail>(
      this.baseApiUrl + '/api/Student',
      student
    );
  }

  getStudent(id: string): Observable<studentdetail> {
    return this.http.get<studentdetail>(this.baseApiUrl + '/api/Student/' + id);
  }

  updateStudent(
    id: string,
    updateStudentRequest: studentdetail
  ): Observable<studentdetail> {
    return this.http.put<studentdetail>(
      this.baseApiUrl + '/api/Student/' + id,
      updateStudentRequest
    );
  }

  deleteStudent(id: string): Observable<studentdetail> {
    return this.http.delete<studentdetail>(
      this.baseApiUrl + '/api/Student/' + id
    );
  }
}
