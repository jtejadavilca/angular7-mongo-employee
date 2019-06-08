import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/interfaces/interfaces';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employee: Employee = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    active: false
  };
  employees: Observable<Employee[]>;

  constructor(private employeeService: EmployeesService) { }

  ngOnInit() {
    this.reloadData();
  }

  deleteEmployees() {
    this.employeeService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error)
      );
  }

  reloadData() {
    this.employees = this.employeeService.obtenerEmpleados();
  }

  recargarGrilla(event: boolean) {
    if (event) {
      this.reloadData();
    }
  }


  confirmarEditar(employee) {
    console.log('confirm...');
    this.employee = {
      id: employee ? employee.id : null,
      firstName: employee ? employee.firstName : '',
      lastName: employee ? employee.lastName : '',
      email: employee ? employee.email : '',
      active: employee ? employee.active : true
    };
  }

  confirmarEliminar(id) {
    this.employeeService.deleteEmployee(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      }, error => console.log(error));

  }
}
