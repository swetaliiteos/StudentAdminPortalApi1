import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/api-models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
private baseApiUrl ='https://localhost:7273';

  constructor(private HttpClient:HttpClient) { }
  
  getStudent(): Observable<Student[]> {

    return this.HttpClient.get<Student[]>(this.baseApiUrl + '/student');

  }
}
