import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subject, first } from 'rxjs';
import { Book } from 'src/app/models/books/book';
import { User } from 'src/app/models/user';
import { FirebaseService } from 'src/app/services/firebase.service';
import { CRUDService } from 'src/app/shared/crud.service';

@Component({
  selector: 'user-borrow',
  templateUrl: './user-borrow.component.html',
  styleUrls: ['./user-borrow.component.css'],
})
export class UserBorrowComponent implements OnInit {
  static ngOnInit() {
    throw new Error('Method not implemented.');
  }
  data = {} as User;
  bookusers$: Book[] = [];
  editing = false;
  private unsubscribe = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private crud: CRUDService,
    private fireB: FirebaseService
  ) {}

  ngOnInit(): void {
    this.crud.getBooks().subscribe((val) => {
      this.bookusers$ = val;
    });
    this.fireB.currentUser.subscribe((user)=>{
      this.data = user;
    })
  }

  destroy() {
    // Emit something to stop all Observables
    this.unsubscribe.next();
    // Complete the notifying Observable to remove it
    this.unsubscribe.complete();
  }

  //Can only borrow 5 books - already set on services
  borrowBook(book: Book) {
    if( this.data.BRWD_books!.length < 3){
      this.data.BRWD_books!.push(book);
      book.status = 'BORROWED';
      this.crud.updateBook(this.data, book);
      console.log ('Book Borrowed by' + this.data!.fname);
    }
    else{
      console.log('Maximum number of books to borrow!');
      alert('Maximum number of books to borrow!');
    }
        
       
      
  } 
    // Returns ex. {success: true, data: 'Book status changed - Borrowed"}
  
  returnBook(book: Book) {
    
       this.data.BRWD_books?.forEach((value,index) => {
        if(value.id == book.id){
          this.data.BRWD_books?.splice(index, 1);
        }
       })
       console.log(this.data.BRWD_books)
        book.status = 'AVAILABLE';
        this.crud.updateBook(this.data, book);
        console.log ('Book Returned by' + this.data!.fname);
        
        
        
     
    // Returns ex. {success: true, data: 'Book status changed - AVAILABLE"}
  }
}
