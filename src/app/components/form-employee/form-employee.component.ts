import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';

declare function $(ElementRef);

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.css']
})
export class FormEmployeeComponent implements OnInit {

  @Input() employee;
  @Output() agregaEdita: EventEmitter<boolean> = new EventEmitter();
  @ViewChild('modalMtoEmpleado') modalMtoEmpleado: ElementRef;

  constructor(private employeeService: EmployeesService) { }

  ngOnInit() {
  }

  save() {
    if (this.employee && this.employee.id && this.employee.id !== '0') {
      this.employeeService.updateEmployee(this.employee.id, this.employee)
          .subscribe(
            data => {
              this.agregaEdita.emit(true);
              $(this.modalMtoEmpleado.nativeElement).modal('hide');
            },
            error => {
            }
          );
      } else {
        this.employee.id = '0';
        this.employeeService.createEmployee(this.employee)
        .subscribe(
          data => {
            this.agregaEdita.emit(true);
            $(this.modalMtoEmpleado.nativeElement).modal('hide');
          },
          error => {
          }
        );
      }
  }

  onSubmit() {
    this.save();
  }
}
