import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { async, from, of } from 'rxjs';
import { Book } from 'src/app/models/books/book';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Books } from 'src/app/shared/book-mock-data';
import { CRUDService } from 'src/app/shared/crud.service';
import { environment } from 'src/environments/environment';
import { UserBorrowComponent } from './user-borrow.component';

describe('UserBorrowComponent', () => {
  let component: UserBorrowComponent;
  let fixture: ComponentFixture<UserBorrowComponent>;
  let service: CRUDService;

  let Books = {
    id: 'MDOOS75AHw2TVFHW8tac',
    bookid: '2007162',
    name: 'Geography',
    status: 'Unavailable',
    published: 'May 2007',
    author: 'Kent Telebanco',
    }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule,FormsModule, AngularFireModule.initializeApp(environment.firebase), provideFirestore(() => getFirestore()),
        provideFirebaseApp(() =>initializeApp(environment.firebase)),provideAuth(()=>getAuth())], 

      declarations: [ UserBorrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBorrowComponent);
    service = TestBed.inject(CRUDService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call borrowBook when it receives a value', () => {
     let callBorrowBook = spyOn(component, 'borrowBook');
     component.borrowBook(Books);
     fixture.detectChanges();
     expect(callBorrowBook).toHaveBeenCalled();
   });

   it('should call returnBook when value is returned', () => {
    let callReturnBook = spyOn(component, 'returnBook');
     component.returnBook(Books);
     fixture.detectChanges();
     expect(callReturnBook).toHaveBeenCalled();
   });

});
