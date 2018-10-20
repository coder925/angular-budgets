import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusotmerListComponent } from './cusotmer-list.component';

describe('CusotmerListComponent', () => {
  let component: CusotmerListComponent;
  let fixture: ComponentFixture<CusotmerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusotmerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusotmerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
