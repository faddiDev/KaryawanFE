import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeJoin } from './Employee';
import { EmployeeDto } from './EmployeeDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KaryawanindexService {

  private url: string = "http://localhost:8080/KaryawanBO/karyawanindex";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<EmployeeJoin[]> {
    return this.http.get<EmployeeJoin[]>(this.url, {});
  }

  deleteEmployee(employeeDto: EmployeeDto): Observable<EmployeeDto> {
    return this.http.post<EmployeeDto>("http://localhost:8080/KaryawanBO/delete", employeeDto);
  }
}
