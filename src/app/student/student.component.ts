import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { StudentService } from '../service/student/student.service';

import { Student } from '../service/student/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  // template : `<h1> Student Component </h1>
  // <h1> With multiline html</h1>
  //       `,
  styleUrls: ['./student.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [StudentService]
  // styles: ['h1 { background-color: red  }']
})
export class StudentComponent implements OnInit {
  title: string = 'Student Component';
  name: string = 'Kapil';
  isVisible: boolean = false;
  role: string = 'Demo User';
  student: Student = new Student();
  emailRegex = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$';
  selectedStudent: Student = new Student();
  // studentService: StudentService = new StudentService();
  studentList: Student[] = [];
  isSubmitted: boolean = false;
  // studentList: Student[] = [
  //   { id: 1, name: 'Sudeep', dob: new Date('31-Jan-1987') },
  //   { id: 2, name: 'Srinivas', dob: new Date('31-Jan-1987') },
  //   { id: 3, name: 'Jay', dob: new Date('31-Jan-1987') },
  //   { id: 4, name: 'Roshani', dob: new Date('31-Jan-1987') },
  //   { id: 5, name: 'Jyoti', dob: new Date('31-Jan-1987') }
  // ];
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.loadStudent();
  }

  loadStudent(): Student[] {
    this.studentList = this.studentService.getStudents();
    return this.studentList;
  }


  toggle(): void {
    this.isVisible = !this.isVisible;
  }

  readStudent(student: Student) {
    this.selectedStudent = student;
  }

  save(studentForm): void {
    this.isSubmitted = true;
    console.log(this.student);
    this.studentService.addStud(this.student);
    this.loadStudent();
    this.student = new Student();
    studentForm.reset();
  }
}
