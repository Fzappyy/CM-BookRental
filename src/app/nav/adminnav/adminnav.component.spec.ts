import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';



import { AdminnavComponent } from './adminnav.component';

describe('AdminnavComponent', () => {
  let component: AdminnavComponent;
  let fixture: ComponentFixture<AdminnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({imports: [ ReactiveFormsModule,FormsModule, RouterTestingModule, AngularFireModule.initializeApp(environment.firebase), provideFirestore(() => getFirestore()),
      provideFirebaseApp(() =>initializeApp(environment.firebase)),provideAuth(()=>getAuth())],
      declarations: [ AdminnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
