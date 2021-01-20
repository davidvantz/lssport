import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/Services/book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  bookList:any;
  constructor(private BooksService:BookServiceService) { }

  ngOnInit(): void {
   this.bookList= this.BooksService.getBookList();
   console.log(this.bookList);
  }

}
