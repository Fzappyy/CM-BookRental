import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Book, Book_Status, Setbook_Status } from 'src/app/models/books/book';
import { CRUDService } from 'src/app/shared/crud.service';
@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {
  today: number = Date.now();
  book = {} as Book;
  public selectedValue:any;
  public setStatus;
  
  public  get  selectStatus():Book_Status {
  return this.selectedValue ? this.selectedValue.value: null; }
  

  addForm = this.fb.group({
    bookid: ['', Validators.required],
    title: ['', Validators.required],
    author: ['', Validators.required],
    published: ['', Validators.required],
    status: ['', Validators.required],
    
  });


  constructor(private fb: FormBuilder, private crud: CRUDService) {
    setInterval(() => {this.today = Date.now()}, 1);
    this.setStatus = Setbook_Status;
    this.selectedValue = this.setStatus[2]
   }

  ngOnInit(): void {
  }

  addBook(bookid: string, title: string, author: string, published: string, status: string){
    this.book.id = bookid;
    this.book.bookid = bookid;
    this.book.name = title;
    this.book.author = author;
    this.book.published = published;
    this.book.status = status.toUpperCase();

    this.crud.addBook(this.book);
    alert("Successfully Added");
  }

}
