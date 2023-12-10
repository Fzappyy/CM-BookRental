import { TestBed } from '@angular/core/testing';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { HotToastModule } from '@ngneat/hot-toast';
import { environment } from 'src/environments/environment';

import { FirebaseService } from './firebase.service';

describe('FirebaseService', () => {
  let service: FirebaseService;
  let afs: AngularFirestore;

 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
      provideFirestore(() => getFirestore()),
    HotToastModule.forRoot(),
    provideFirebaseApp(() =>initializeApp(environment.firebase)),
    provideAuth(()=>getAuth()),
    ],
    })
    .compileComponents();
  });

  beforeEach(() => {

    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


