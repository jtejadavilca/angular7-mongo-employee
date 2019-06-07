import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../interfaces/interfaces';
import { EmployeesService } from '../../services/employees.service';
import { ListEmployeeComponent } from '../list-employee/list-employee.component';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent implements OnInit {

  @Input() employee: Employee;

  constructor(private employeeService: EmployeesService,
              private listComponent: ListEmployeeComponent) { }

  ngOnInit() {
  }

  updateActive (isActive: boolean) {
    this.employeeService.updateEmployee(this.employee.id, {
      id: this.employee.id,
      firstName: this.employee.firstName,
      lastName: this.employee.lastName,
      email: this.employee.email,
    }).subscribe(
      data => {
        console.log(data)
        this.employee = data as Employee;
      },
      error => console.log(error)
    );
  }

  deleteCustomer() {
    this.employeeService.deleteEmployee(this.employee.id)
    .subscribe(
      data => {
        console.log(data);
        this.listComponent.reloadData();
      }, error => console.log(error));
    }


}
