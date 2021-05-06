import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoginErrorModalComponent } from './login-error-modal.component';

describe('LoginErrorModalComponent', () => {
  let component: LoginErrorModalComponent;
  let fixture: ComponentFixture<LoginErrorModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginErrorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginErrorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
