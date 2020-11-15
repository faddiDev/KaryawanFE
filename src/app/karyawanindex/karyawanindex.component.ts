import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeAll } from '../Employee';
import { EmployeeDto } from '../EmployeeDto';
import { KaryawanindexService } from '../karyawanindex.service';
import { KaryawaneditaddService } from '../karyawaneditadd.service';

@Component({
  selector: 'app-karyawanindex',
  templateUrl: './karyawanindex.component.html',
  styleUrls: ['./karyawanindex.component.css']
})

export class KaryawanindexComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort, {static: false}) sort: MatSort; 

  displayedColumns: string[] = ['id', 'name', 'birthDate', 'positionId', 'idNumber', 'gender', 'Aksi'];

  employee: EmployeeAll;
  dataSource: any;
  page: number = 1;
  count: number = 1;
  math = Math;

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
    this.employee = {
      employeeDto : null,
      page: this.page,
      count: 0
    }
    this.karyawanindexService.getEmployees(this.employee).subscribe(data => {
      this.count = data.count;
      this.dataSource = new MatTableDataSource<any>(data.employeeDto);
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

  prev() {
    this.page -= 1;
    if(this.page == 0) this.page=1; 
    this.getEmployeeData();
  }

  next() {
    if(this.page < Math.ceil(this.count/5)) this.page += 1;
    this.getEmployeeData();
  }
}