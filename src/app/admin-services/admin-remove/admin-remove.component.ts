import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Book, Book_Status, Setbook_Status } from 'src/app/models/books/book';
import { CRUDService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-admin-remove',
  templateUrl: './admin-remove.component.html',
  styleUrls: ['./admin-remove.component.css']
})
export class AdminRemoveComponent implements OnInit {
  today: number = Date.now();
  book = {} as Book;
  bookusers$: any[]= [];

  removeForm = this.fb.group({
    bookid: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private crud: CRUDService) {
  setInterval(() => {this.today = Date.now()}, 1);
 }

ngOnInit(): void {
  this.crud.getBooks().subscribe((val) => {
    console.log(val)
    this.bookusers$ = val
  });
}

removeBook(bookid:string){
  alert("Book Removed Successfully");
  return this.crud.removeBook(bookid);
}
}
