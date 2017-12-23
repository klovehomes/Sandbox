import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CientInfoFormComponent } from './cient-info-form.component';

describe('CientInfoFormComponent', () => {
  let component: CientInfoFormComponent;
  let fixture: ComponentFixture<CientInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CientInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CientInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
