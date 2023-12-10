import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { EMPTY, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/books/book';
import { Books } from './book-mock-data';

import { CRUDService } from './crud.service';
import { Users } from './user-mock-data';

describe('CRUDService', () => {
  let service: CRUDService;
  let afs: AngularFirestore;
  const data = from(Books);
  const data2 = from(Users);

  const insideCollection = jasmine.createSpyObj('collection', [
    'doc',
    'valueChanges',
  ]);
  const insideCollection2 = jasmine.createSpyObj('collection', [
    'doc',
    'valueChanges',
  ]);

  const insideDocs = jasmine.createSpyObj('doc', [
    'get',
    'update',
    'delete',
    'set',
  ]);

  const insideDocs2 = jasmine.createSpyObj('doc', [
    'get',
    'update',
    'delete',
    'set',
  ]);

  const fakeAfs = jasmine.createSpyObj('AngularFirestore', ['collection', 'createId']);
  const fakeAfs2 = jasmine.createSpyObj('AngularFirestore', ['collection', 'createId']);
  fakeAfs.collection.and.returnValue(insideCollection);
  fakeAfs2.collection.and.returnValue(insideCollection2);
  insideCollection.valueChanges.and.returnValue(data);
  insideCollection2.valueChanges.and.returnValue(data2);
  insideCollection2.valueChanges.and.returnValue(insideDocs2);
  insideCollection.doc.and.returnValue(insideDocs);
  insideDocs.get.and.returnValue(data);
  insideDocs2.get.and.returnValue(data2);
  let fixture: ComponentFixture<CRUDService>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        provideFirestore(() => getFirestore()),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
      ],
    }).compileComponents();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: AngularFirestore}],
    });
    afs = TestBed.inject(AngularFirestore);
    service = TestBed.inject(CRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should remove book from firebase', (done: DoneFn) => {
    let payload = Books[0];

    let data: Array<any> = [];
    service.removeBook(Books[0].id).subscribe((value)=>{
      data.push(value);
      data.splice(0,1);
      done();
    })
    
    expect(data).not.toContain(payload);

  });

  it('should update one book', () => {
    let data = Books;
    let data2 = Users;
    let spy = spyOn(service, 'updateBook');
    service.updateBook(data2[0], data[0]);
    expect(spy).toHaveBeenCalledWith(data2[0], data[0]);
  });

  it('should get borrowed books', () => {
    let data2 = Users;
    let spy = spyOn(service, 'getBorrowedBooks').and.returnValue(EMPTY);
    service.getBorrowedBooks();
    expect(spy).toHaveBeenCalled();
  });

  it('should get all user borrowed books',()  => {
    let data2 = Users;
    let spy = spyOn(service, 'getUserBorrowedBooks').and.returnValue(EMPTY);
    service.getUserBorrowedBooks(data2[0].id);
    expect(spy).toHaveBeenCalledWith(data2[0].id);
  });


});

