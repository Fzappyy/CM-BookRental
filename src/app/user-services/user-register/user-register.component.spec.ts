import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

import { UserRegisterComponent } from './user-register.component';

describe('UserRegisterComponent', () => {
  let component: UserRegisterComponent;
  let fixture: ComponentFixture<UserRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule, FormsModule, AngularFireModule.initializeApp(environment.firebase), provideFirestore(() => getFirestore()),
        provideFirebaseApp(() =>initializeApp(environment.firebase)),provideAuth(()=>getAuth())],
      declarations: [ UserRegisterComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid if signin form is empty', () => {
    expect(component.regform.valid).toBeFalsy();
  });

it('should verify valid email', () => {
  let errors = {};
  let email = component.regform.controls['email'];
  expect(email.valid).toBeFalsy();

  email.setValue("test@gmail.com");
  errors = email.errors || {};
  expect(email.hasError('required')).toBeFalsy();
  expect(email.hasError('email')).toBeFalsy();
});
});
