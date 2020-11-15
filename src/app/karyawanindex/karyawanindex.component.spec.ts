import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaryawanindexComponent } from './karyawanindex.component';

describe('KaryawanindexComponent', () => {
  let component: KaryawanindexComponent;
  let fixture: ComponentFixture<KaryawanindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaryawanindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaryawanindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
