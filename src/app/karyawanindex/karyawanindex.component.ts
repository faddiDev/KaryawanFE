import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatPaginator}  from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeJoin } from '../Employee';
import { EmployeeDto } from '../EmployeeDto';
import { KaryawanindexService } from '../karyawanindex.service';
import { KaryawaneditaddService } from '../karyawaneditadd.service';
import { map } from 'rxjs/operators';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-karyawanindex',
  templateUrl: './karyawanindex.component.html',
  styleUrls: ['./karyawanindex.component.css']
})

export class KaryawanindexComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort, {static: false}) sort: MatSort; 

  displayedColumns: string[] = ['id', 'name', 'birthDate', 'positionId', 'idNumber', 'gender', 'Aksi'];

  employee: EmployeeJoin;
  dataSource: any;

  constructor(private karyawanindexService: KaryawanindexService, 
    private router: Router, 
    private route: ActivatedRoute,
    private karyawaneditaddService: KaryawaneditaddService) {
    }

  ngOnInit(): void {
    this.getEmployeeData();
    this.karyawaneditaddService.currentMessage.subscribe(employee => this.employee = employee);
  }

  getEmployeeData() {
    this.karyawanindexService.getEmployees().subscribe(data => {
      this.dataSource = new MatTableDataSource<EmployeeJoin>(data);
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit(): void {
  }

  onNew() {
    this.karyawaneditaddService.changeEmployee(null);
    this.router.navigate(['promise/karyawaneditadd']);
  }

  onEdit(event) {
    this.karyawaneditaddService.changeEmployee(event);
    this.router.navigate(['promise/karyawaneditadd']);
  }

  onDelete(event) {
    let employeeDto:EmployeeDto = {
      'id' : event.id,
      'name' : event.name,
      'birthDate' : event.birthDate,
      'idNumber' : event.idNumber,
      'positionId' : event.positionId.id,
      'gender' : event.gender,
      'isDelete' : 1
    }
    if(confirm("Apakah anda akan menghapus data ini?")) {
      this.karyawanindexService.deleteEmployee(employeeDto).subscribe(data => {
        if(data) {
          alert("Data " + event.name + " Berhasil Di Delete!");
          this.getEmployeeData();
        }
      });
      setTimeout(function() {
      },2000);
    }
  }
}