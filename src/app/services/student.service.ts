import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[];

  constructor() {
    this.students ={
      controlnumber:"655699",
      age: 30,
      career: "isc",
      curp:"kvnljihezjsovklmfz",
      email: "edgbhde@cknisv.com",
      name: "jamxmcid",
      nip: 7855

    }
  }

  public getStudent():Student{

  }
}
