import { Component } from '@angular/core';
import { KaryawaneditaddService } from './karyawaneditadd.service';
import { EmployeeJoin } from './Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'KaryawanFE';

  employee: EmployeeJoin;

  constructor(private karyawaneditaddService: KaryawaneditaddService) {}

  ngOnInit() {
    this.karyawaneditaddService.currentMessage.subscribe(employee => this.employee = employee);
  }

}
