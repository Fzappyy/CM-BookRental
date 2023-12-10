import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminSigninComponent } from './admin-signin.component';

describe('AdminSigninComponent', () => {
  let component: AdminSigninComponent;
  let fixture: ComponentFixture<AdminSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule,FormsModule, RouterTestingModule, AngularFireModule.initializeApp(environment.firebase), provideFirestore(() => getFirestore()),
        provideFirebaseApp(() =>initializeApp(environment.firebase)),provideAuth(()=>getAuth())],
      declarations: [ AdminSigninComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid if signin form is empty', () => {
    expect(component.signinform.valid).toBeFalsy();
  });

  it('should allow admin to signin', () => {
    const formData = {
      "email": "something@somewhere.com",
      "password": "8938ndisn@din"
    };
    component.signinform.setValue(formData);
    component.onSignin

    expect(component.signinform.valid).toEqual(true);
  });

  it('should verify valid email', () => {
    let errors = {};
    let email = component.signinform.controls['email'];
    expect(email.valid).toBeFalsy();
  
    email.setValue("test@gmail.com");
    errors = email.errors || {};
    expect(email.hasError('required')).toBeFalsy();
    expect(email.hasError('email')).toBeFalsy();
  });
});
