import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Books } from 'src/app/shared/book-mock-data';
import { environment } from 'src/environments/environment';

import { AdminRemoveComponent } from './admin-remove.component';

describe('AdminRemoveComponent', () => {
  let component: AdminRemoveComponent;
  let fixture: ComponentFixture<AdminRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule,FormsModule, AngularFireModule.initializeApp(environment.firebase), provideFirestore(() => getFirestore()),
        provideFirebaseApp(() =>initializeApp(environment.firebase)),provideAuth(()=>getAuth())], 
      declarations: [ AdminRemoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call removeBook when value is returned', () => {
    let data = Books;
    let spy = spyOn(component, 'removeBook');
    component.removeBook("03W9EJFSF");
    expect(spy).toHaveBeenCalledWith("03W9EJFSF");
   });
});
