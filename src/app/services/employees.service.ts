import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  // baseUrl = 'http://192.168.14.121:8083';
  baseUrl = 'http://localhost:8082/employee';

  constructor(private http: HttpClient) { }

  obtenerEmpleados(): Observable<any> {
    console.log('obtenerEmpleados');
    const url = `${this.baseUrl}s`;
    return this.http.get(url);
  }

  getEmployee(id: string): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createEmployee(employee: Object): Observable<Object> {
    console.log(employee);
    return this.http.post(`${this.baseUrl}`, employee);
  }
  updateEmployee(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  deleteEmployee(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesByFirstName(firstName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/firstName/${firstName}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });

  }

}
