import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { KaryawanindexComponent } from './karyawanindex/karyawanindex.component';
import { KaryawaneditaddComponent } from './karyawaneditadd/karyawaneditadd.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { KaryawanindexService } from './karyawanindex.service';
import { KaryawaneditaddService } from './karyawaneditadd.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    KaryawanindexComponent,
    KaryawaneditaddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [KaryawanindexService, KaryawaneditaddService],
  bootstrap: [AppComponent]
})
export class AppModule { }
