import { Component, Input, OnInit } from '@angular/core';
import { bookInfo } from 'src/app/Models/BookModel';
import { BookServiceService } from 'src/app/Services/book-service.service';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.scss']
})
export class BookListItemComponent implements OnInit {
  @Input("Book") Book:bookInfo;
  constructor(private BooksService:BookServiceService) { }

  ngOnInit(): void {
  }
  removeBook(event){
    this.BooksService.removeBook(this.Book.Id);
  }
}
