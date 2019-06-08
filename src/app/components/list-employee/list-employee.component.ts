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

  confirmarEditar(id) {
    console.log('id', id);
  }
  confirmarEliminar(id) {
    console.log('id', id);
  }
}
