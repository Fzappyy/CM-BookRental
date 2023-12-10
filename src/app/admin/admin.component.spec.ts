import { ComponentFixture, TestBed, async, fakeAsync } from '@angular/core/testing';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';

import { AdminComponent } from './admin.component';
import { User } from '../models/user';
import { FirebaseService } from '../services/firebase.service';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let service: FirebaseService;

  const displayName = {
    user: of({ show: false }),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AngularFireModule.initializeApp(environment.firebase), provideFirestore(() => getFirestore()),
        provideFirebaseApp(() =>initializeApp(environment.firebase)),provideAuth(()=>getAuth()),],
      declarations: [ AdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
