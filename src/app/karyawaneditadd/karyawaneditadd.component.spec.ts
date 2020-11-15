import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaryawaneditaddComponent } from './karyawaneditadd.component';

describe('KaryawaneditaddComponent', () => {
  let component: KaryawaneditaddComponent;
  let fixture: ComponentFixture<KaryawaneditaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaryawaneditaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaryawaneditaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
