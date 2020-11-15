import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Position } from '../Position';
import { EmployeeDto } from '../EmployeeDto';
import { KaryawanindexService } from '../karyawanindex.service';
import { KaryawaneditaddService } from '../karyawaneditadd.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-karyawaneditadd',
  templateUrl: 'karyawaneditadd.component.html',
  styleUrls: ['karyawaneditadd.component.css']
})
export class KaryawaneditaddComponent implements OnInit {

  form:FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    birthDate: new FormControl(''),
    idNumber: new FormControl(''),
    positionId: new FormControl(''),
    gender: new FormControl('')
  });

  employeeDto: EmployeeDto;
  position: Position;

  constructor(private karyawanindexService: KaryawanindexService, 
              private router: Router, 
              private route: ActivatedRoute,
              private karyawaneditaddService: KaryawaneditaddService,
              public fb: FormBuilder) { }

  ngOnInit(): void {
    this.karyawaneditaddService.getPosition().subscribe(data => {
      this.position = data;
    });
    this.karyawaneditaddService.currentMessage.subscribe(data => {
      if(data) {
        let genderValue = data.gender == 1 ? "Pria" : "Wanita";
        this.form = this.fb.group({
          id: [data.id, Validators.required],
          name: [data.name, Validators.required],
          birthDate: [data.birthDate, Validators.required],
          idNumber: [data.idNumber, Validators.required],
          positionId: [data.positionId.id, Validators.nullValidator],
          gender: [genderValue, Validators.nullValidator]
        });
      } else {
        this.form = this.fb.group({
          id: ['', Validators.required],
          name: ['', Validators.required],
          birthDate: ['', Validators.required],
          idNumber: ['', Validators.required],
          positionId: ['', Validators.nullValidator],
          gender: ['', Validators.nullValidator]
        });
      }
    });
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  onSubmit(data) {
    if(data.value.name == '' || data.value.birthDate == ''
        || data.value.idNumber == '' || data.value.positionId == '') {
          alert("Dda data yang kosong, harap di isi!");
    } else {
      if(confirm("Apakah anda akan menyimpan data ini?")) {
        let employeeDto:EmployeeDto = {
          'id' : data.value.id == '' ? null : data.value.id,
          'name' : data.value.name == '' ? null : data.value.name,
          'birthDate' : data.value.birthDate == '' ? null : data.value.birthDate,
          'idNumber' : data.value.idNumber == '' ? null : data.value.idNumber,
          'positionId' : data.value.positionId == '' ? null : data.value.positionId,
          'gender' : data.value.gender == "Pria" ? 1 : 2,
          'isDelete' : 0
        }
        if(data.value.id == '') {
          //insert
          this.karyawaneditaddService.insertEmployee(employeeDto).subscribe(data => {
            if(data) {
              alert("Data berhasil di simpan!");
            }
          });
          setTimeout("",2000);
          this.router.navigate(['promise/karyawanindex']);
        } else {
          //update
          this.karyawaneditaddService.updateEmployee(employeeDto).subscribe(data => {
            if(data) {
              alert("Data berhasil di update!");
            }
          });
          setTimeout("",2000);
          this.router.navigate(['promise/karyawanindex']);
        }
      }
    }
  }
}
