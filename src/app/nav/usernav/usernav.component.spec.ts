import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { timer, mapTo, of } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';
import { environment } from 'src/environments/environment';

import { UsernavComponent } from './usernav.component';

describe('UsernavComponent', () => {
  let component: UsernavComponent;
  let fixture: ComponentFixture<UsernavComponent>;
  let showPopup: "John Doe";
 
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AngularFireModule.initializeApp(environment.firebase), provideFirestore(() => getFirestore()),
        provideFirebaseApp(() =>initializeApp(environment.firebase)),provideAuth(()=>getAuth()),],
      declarations: [ UsernavComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
