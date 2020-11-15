import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeAll } from './Employee';
import { EmployeeDto } from './EmployeeDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KaryawanindexService {

  private url: string = "http://localhost:8080/KaryawanBO/karyawanindex";

  constructor(private http: HttpClient) { }

  getEmployees(employee: EmployeeAll): Observable<EmployeeAll> {
    return this.http.post<EmployeeAll>(this.url, employee);
  }

  deleteEmployee(employeeDto: EmployeeDto): Observable<EmployeeDto> {
    return this.http.post<EmployeeDto>("http://localhost:8080/KaryawanBO/delete", employeeDto);
  }
}
