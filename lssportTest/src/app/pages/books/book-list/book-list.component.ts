import { Component, OnInit } from '@angular/core';
import { bookInfo } from 'src/app/Models/BookModel';
import { BookServiceService } from 'src/app/Services/book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  bookList:bookInfo[];
  constructor(private BooksService:BookServiceService) { }

  ngOnInit(): void {
    this.BooksService.bSubject.subscribe(res=>{
      this.bookList = res;
    })
   this.bookList= this.BooksService.getBookList();
   console.log(this.bookList);
  }

}
