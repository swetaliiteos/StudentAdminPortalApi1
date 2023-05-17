import { Component, OnInit, ViewChild} from '@angular/core';
import { StudentService } from './student.service';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../models/ui-models/student.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students:Student[]=[];
  displayedColumns: string[] = ['FirstName', 'LastName', 'DateOfBirth','Email', 'Mobile','Gender'];
  dataSource:MatTableDataSource<Student> = new MatTableDataSource<Student>();
  @ViewChild(MatPaginator) matpaginator! : MatPaginator;  
  @ViewChild(MatSort)matSort! : MatSort;
  filterString ='';
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {

    //fetch students

    this.studentService.getStudent()
   .subscribe(
    (successResponse) => {
      this.students = successResponse;
      this.dataSource = new MatTableDataSource<Student>(this.students);
      if(this.matpaginator){
        this.dataSource.paginator = this.matpaginator;
      }
      if(this.matSort){
        this.dataSource.sort = this.matSort; 
      }
    },
    (errorResponse) => {
      console.log(errorResponse);
    }
   )
  
    
  }
  filterStudents(){
    this.dataSource.filter = this.filterString.trim().toLowerCase();
  }
}
