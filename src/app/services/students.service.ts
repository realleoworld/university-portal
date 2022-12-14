import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { studentdetail } from '../models/student.models';
import { courseDetails } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  getAllCourse(): Observable<courseDetails[]> {
    return this.http.get<courseDetails[]>(this.baseApiUrl + '/api/course');
  }

  course(course: courseDetails): Observable<courseDetails> {
    // course.courseId = '00000000-0000-0000-0000-000000000000';
    return this.http.post<courseDetails>(
      this.baseApiUrl + '/api/course',
      course
    );
  }

  getCourse(id: string): Observable<courseDetails> {
    return this.http.get<courseDetails>(this.baseApiUrl + '/api/course/' + id);
  }

  updateCourse(
    courseId: any,
    updateStudentRequest: courseDetails
  ): Observable<courseDetails> {
    return this.http.put<courseDetails>(
      this.baseApiUrl + '/api/course/' + courseId,
      updateStudentRequest
    );
  }

  deleteCourse(courseId: any): Observable<courseDetails> {
    return this.http.delete<courseDetails>(
      this.baseApiUrl + '/api/course/' + courseId
    );
  }
  createCourse(student: courseDetails): Observable<courseDetails> {
    return this.http.post<courseDetails>(
      this.baseApiUrl + '/api/course/',
      student
    );
  }

  getAllStudents(): Observable<studentdetail[]> {
    return this.http.get<studentdetail[]>(this.baseApiUrl + '/api/Student');
  }

  student(student: studentdetail): Observable<studentdetail> {
    student.id = 0;
    return this.http.post<studentdetail>(
      this.baseApiUrl + '/api/Student',
      student
    );
  }

  authenticate(student: studentdetail): Observable<studentdetail> {
    student.phone = 0;
    console.log(student);
    return this.http.post<studentdetail>(
      this.baseApiUrl + '/api/Student/authenticate',
      student
    );
    // .pipe(
    //   map((data) => {
    //     return data;
    //   }),
    //   catchError(this.handleError)
    // );
  }

  getStudent(id: string): Observable<studentdetail> {
    return this.http.get<studentdetail>(this.baseApiUrl + '/api/Student/' + id);
  }

  updateStudent(
    id: number,
    updateStudentRequest: studentdetail
  ): Observable<studentdetail> {
    return this.http.put<studentdetail>(
      this.baseApiUrl + '/api/Student/' + id,
      updateStudentRequest
    );
  }

  deleteStudent(id: number): Observable<studentdetail> {
    return this.http.delete<studentdetail>(
      this.baseApiUrl + '/api/Student/' + id
    );
  }
  createStudent(student: studentdetail): Observable<studentdetail> {
    return this.http.post<studentdetail>(
      this.baseApiUrl + '/api/Student/',
      student
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
