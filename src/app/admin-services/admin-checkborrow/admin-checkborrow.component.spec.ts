import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';
import { AdminCheckborrowComponent } from './admin-checkborrow.component';

describe('AdminCheckborrowComponent', () => {
  let component: AdminCheckborrowComponent;
  let fixture: ComponentFixture<AdminCheckborrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({imports: [ ReactiveFormsModule,FormsModule, RouterTestingModule, AngularFireModule.initializeApp(environment.firebase), provideFirestore(() => getFirestore()),
      provideFirebaseApp(() =>initializeApp(environment.firebase)),provideAuth(()=>getAuth())],

      declarations: [ AdminCheckborrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCheckborrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
