import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Book } from '../../models/books/book';
import { CRUDService } from '../../shared/crud.service';

@Component({
  selector: 'app-admin-checkborrow',
  templateUrl: './admin-checkborrow.component.html',
  styleUrls: ['./admin-checkborrow.component.css']
})
export class AdminCheckborrowComponent implements OnInit {
  today: number = Date.now();
  book = {} as Book;
  bookusers: any[]= [];
  bookname = "General Users";

  removeForm = this.fb.group({
    bookid: ['', Validators.required],
  });


  constructor(private fb: FormBuilder, private crud: CRUDService) { }

  ngOnInit(): void {
    this.crud.getBorrowedBooks().subscribe((val) => {
      this.bookusers = val.data
    });
  }

  getUserBRW(userid: string){
    this.crud.getUserBorrowedBooks(userid).subscribe((val) => {
      this.bookusers = val.data.books
      this.bookname = val.data.username
    });
  }

  clearEntry(){
    this.crud.getBorrowedBooks().subscribe((val) => {
      console.log(val)
      this.bookusers = val.data
      this.bookname = "General Users"
      this.removeForm.reset()
    });
  }

}
