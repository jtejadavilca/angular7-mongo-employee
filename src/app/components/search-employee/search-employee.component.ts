import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { Employee } from '../../interfaces/interfaces';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {

  firstName: string;
  employees: Employee[];

  constructor(private dataService: EmployeesService) { }

  ngOnInit() {
    this.firstName = '';
  }

  private searchEmployees() {
    this.dataService.getEmployeesByFirstName(this.firstName)
      .subscribe(
        employees => this.employees = employees
      );
  }

  onSubmit() {
    this.searchEmployees();
  }
}
