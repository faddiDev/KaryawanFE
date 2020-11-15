import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { EmployeeJoin } from './Employee';
import { EmployeeDto } from './EmployeeDto';
import { Position } from './Position';

@Injectable({
  providedIn: 'root'
})
export class KaryawaneditaddService {

  private urlPosition: string = "http://localhost:8080/KaryawanBO/position";

  private messageSource = new BehaviorSubject(null);
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }

  getPosition(): Observable<Position> {
    return this.http.get<Position>(this.urlPosition, {});
  }

  getEmployeeById(id: number): Observable<EmployeeJoin> {
    return this.http.get<EmployeeJoin>("http://localhost:8080/KaryawanBO/employee/"+id, {});
  }

  insertEmployee(employeeDto: EmployeeDto): Observable<EmployeeDto> {
    return this.http.post<EmployeeDto>("http://localhost:8080/KaryawanBO/insert", employeeDto);
  }

  updateEmployee(employeeDto: EmployeeDto): Observable<EmployeeDto> {
    return this.http.post<EmployeeDto>("http://localhost:8080/KaryawanBO/update", employeeDto);
  }

  changeEmployee(employee: EmployeeJoin) {
    this.messageSource.next(employee);
  }
}
