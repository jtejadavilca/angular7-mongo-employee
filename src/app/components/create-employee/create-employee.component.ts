import { Component, OnInit } from '@angular/core';
import { Employee } from '../../interfaces/interfaces';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee;
  submitted = false;

  constructor(private employeeService: EmployeesService) { }

  ngOnInit() {
    this.newEmployee();
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = {
      id: '0',
      firstName: '',
      lastName: '',
      email: '',
      active: true
    };
  }

  save() {
    this.employeeService.createEmployee(this.employee)
        .subscribe(
          data => console.log(data),
          error => console.log(error)
        );
        this.employee = {
          id: '0',
          firstName: '',
          lastName: '',
          email: '',
          active: true
        };
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
